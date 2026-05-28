import { useState, useMemo } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as FaSolid from "@fortawesome/free-solid-svg-icons";
import { Box, Button, Fade, Collapse, Typography } from "@mui/material";
import { list } from "postcss";

// ─── helpers ────────────────────────────────────────────────────────────────

function getDuration(dateRange) {
    const [startStr, endStr] = dateRange.split(" - ");
    const startDate = new Date(Date.parse(startStr));
    const endDate = endStr === "Present" ? new Date() : new Date(Date.parse(endStr));

    let years = endDate.getFullYear() - startDate.getFullYear();
    let months = endDate.getMonth() - startDate.getMonth();
    if (months < 0) { years -= 1; months += 12; }

    const result = [];
    if (years > 0) result.push(`${years} yr${years > 1 ? "s" : ""}`);
    if (months > 0) result.push(`${months} mo${months > 1 ? "s" : ""}`);
    return result.join(" ");
}

function getTotalDuration(roles) {
    // earliest start → latest end
    const starts = roles.map(r => new Date(Date.parse(r.time.split(" - ")[0])));
    const ends = roles.map(r => {
        const e = r.time.split(" - ")[1];
        return e === "Present" ? new Date() : new Date(Date.parse(e));
    });
    const minStart = new Date(Math.min(...starts));
    const maxEnd = new Date(Math.max(...ends));

    let years = maxEnd.getFullYear() - minStart.getFullYear();
    let months = maxEnd.getMonth() - minStart.getMonth();
    if (months < 0) { years -= 1; months += 12; }

    const result = [];
    if (years > 0) result.push(`${years} yr${years > 1 ? "s" : ""}`);
    if (months > 0) result.push(`${months} mo${months > 1 ? "s" : ""}`);
    return result.join(" ");
}

function highlightKeywords(text) {
    const parts = text.split(/(\[.*?\])/g);
    return parts.map((part, i) =>
        part.startsWith("[") && part.endsWith("]")
            ? <span key={i} style={{ fontWeight: 700, color: "hsl(30,100%,70%)", display: "inline" }}>{part.slice(1, -1)}</span>
            : part
    );
}

// ─── sub-components ─────────────────────────────────────────────────────────

function RoleItem({ experience, index }) {
    const [open, setOpen] = useState(false);

    return (
        <Fade in timeout={400} style={{ transitionDelay: `${index * 80}ms` }}>
            <div style={styles.roleItem}>
                {/* role header row */}
                <div
                    style={styles.roleHeader}
                    onClick={() => setOpen(o => !o)}
                    role="button"
                    tabIndex={0}
                    onKeyDown={e => e.key === "Enter" && setOpen(o => !o)}
                >
                    <div style={styles.roleHeaderLeft}>
                        <div style={styles.roleDot} />
                        <div>
                            <div style={styles.roleTitle}>{experience.title}</div>
                            <div style={styles.roleMeta}>
                                {experience.time} · {getDuration(experience.time)}
                            </div>
                        </div>
                    </div>
                    <FontAwesomeIcon
                        icon={open ? FaSolid.faChevronUp : FaSolid.faChevronDown}
                        style={styles.chevron}
                    />
                </div>

                {/* bullet points */}
                <ul style={styles.bulletList}>
                    {experience.bulletPoints.filter((item, index) => index < 2).map((point, idx) => (
                        <li key={idx} style={styles.bulletPoint}>
                            {highlightKeywords(point)}
                        </li>
                    ))}
                </ul>
                <Collapse in={open} timeout={300}>
                    <ul style={styles.bulletList}>
                        {experience.bulletPoints.filter((item, index) => index >= 2).map((point, idx) => (
                            <li key={idx} style={styles.bulletPoint}>
                                {highlightKeywords(point)}
                            </li>
                        ))}
                    </ul>
                </Collapse>
            </div>
        </Fade>
    );
}

function CompanyGroup({ company, roles, defaultOpen }) {
    const [expanded, setExpanded] = useState(defaultOpen ?? false);
    const multiRole = roles.length > 1;
    const totalDur = getTotalDuration(roles);
    const dateStart = roles[roles.length - 1].time.split(" - ")[0];
    const dateEnd = roles[0].time.split(" - ")[1];

    return (
        <li style={styles.companyItem}>
            {/* company header */}
            <div
                style={{ ...styles.companyHeader, cursor: multiRole ? "pointer" : "default" }}
                onClick={() => multiRole && setExpanded(o => !o)}
                role={multiRole ? "button" : undefined}
                tabIndex={multiRole ? 0 : undefined}
                onKeyDown={e => multiRole && e.key === "Enter" && setExpanded(o => !o)}
            >
                {/* logo */}
                <div style={styles.logoWrapper}>
                    {roles[0].logo1 ? (
                        <img src={roles[0].logo1} alt={company} style={styles.logo} />
                    ) : (
                        <div style={styles.logoPlaceholder}>
                            <FontAwesomeIcon icon={FaSolid.faBriefcase} style={{ color: "#888" }} />
                        </div>
                    )}
                </div>

                {/* company info */}
                <div style={styles.companyInfo}>
                    <div style={styles.companyName}>{company}</div>
                    <div style={styles.companyMeta}>
                        {multiRole
                            ? `${roles.length} roles · ${totalDur}`
                            : `${roles[0].title} · ${getDuration(roles[0].time)}`
                        }
                    </div>
                    <div style={styles.companyDates}>
                        {dateStart} – {dateEnd}
                    </div>
                </div>

                {/* expand chevron (multi-role only) */}
                {multiRole && (
                    <FontAwesomeIcon
                        icon={expanded ? FaSolid.faChevronUp : FaSolid.faChevronDown}
                        style={styles.companyChevron}
                    />
                )}
            </div>

            {/* roles */}
            {multiRole ? (
                <Collapse in={expanded} timeout={350}>
                    <div style={styles.rolesContainer}>
                        {/* vertical connector line */}
                        <div style={styles.connectorLine} />
                        <div style={{ flex: 1 }}>
                            {roles.map((role, i) => <RoleItem key={i} experience={role} index={i} />)}
                        </div>
                    </div>
                </Collapse>
            ) : (
                /* single role — show bullet points directly, collapsible */
                <div style={styles.rolesContainer}>
                    <div style={styles.connectorLine} />
                    <div style={{ flex: 1 }}>
                        <RoleItem experience={roles[0]} index={0} />
                    </div>
                </div>
            )}
        </li>
    );
}

// ─── main export ────────────────────────────────────────────────────────────

export default function ExperienceSection({ experienceList }) {
    const [showAll, setShowAll] = useState(false);

    // group by company, preserve insertion order
    const grouped = useMemo(() => {
        const map = new Map();
        for (const exp of experienceList) {
            if (!map.has(exp.company)) map.set(exp.company, []);
            map.get(exp.company).push(exp);
        }
        return Array.from(map.entries()); // [ [company, roles[]], ... ]
    }, [experienceList]);

    const visible = showAll ? grouped : grouped.slice(0, 3);

    return (
        <section style={styles.section}>
            {/* section header */}
            <div style={styles.titleWrapper}>
                <div style={styles.iconBox}>
                    <FontAwesomeIcon icon={FaSolid.faBriefcase} />
                </div>
                <h3 className="h3">Experience</h3>
            </div>

            {/* company list */}
            <ol style={styles.companyList}>
                {visible.map(([company, roles], i) => (
                    <CompanyGroup
                        key={company}
                        company={company}
                        roles={roles}
                        defaultOpen={true}   // first company open by default
                    />
                ))}
            </ol>

            {/* show more / less */}
            <Box sx={{ display: "flex", justifyContent: "center", mt: 2 }}>
                <Button
                    variant="outlined"
                    onClick={() => setShowAll(v => !v)}
                    sx={{ backgroundColor: "#282828", color: "white", borderColor: "#444" }}
                >
                    {showAll ? "Show Less" : "Show More"}
                </Button>
            </Box>
        </section>
    );
}

// ─── styles ─────────────────────────────────────────────────────────────────

const styles = {
    section: {
        marginBottom: 30,
    },
    titleWrapper: {
        display: "flex",
        alignItems: "center",
        gap: 15,
        marginBottom: 25,
    },
    iconBox: {
        // reuse your existing .iconBox class styles — keep consistent
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: 30,
        height: 30,
        background: "var(--border-gradient-onyx)",
        borderRadius: 8,
        color: "var(--orange-yellow-crayola)",
        fontSize: 16,
    },
    companyList: {
        listStyle: "none",
        padding: 0,
        margin: 0,
        display: "flex",
        flexDirection: "column",
        gap: 8,
    },
    companyItem: {
        borderRadius: 12,
        border: "1px solid var(--jet)",
        background: "rgba(255,255,255,0.02)",
        overflow: "hidden",
        transition: "border-color 200ms",
    },
    companyHeader: {
        display: "flex",
        alignItems: "center",
        gap: 14,
        padding: "14px 16px",
        userSelect: "none",
        transition: "background 150ms",
    },
    logoWrapper: {
        flexShrink: 0,
        width: 48,
        height: 48,
        borderRadius: 10,
        overflow: "hidden",
        background: "#1a1a1a",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        border: "1px solid #333",
    },
    logo: {
        width: "100%",
        height: "100%",
        objectFit: "contain",
        padding: 4,
    },
    logoPlaceholder: {
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    },
    companyInfo: {
        flex: 1,
        minWidth: 0,
    },
    companyName: {
        fontSize: "var(--fs-4)",
        fontWeight: 700,
        color: "var(--white-2)",
        lineHeight: 1.3,
    },
    companyMeta: {
        fontSize: "var(--fs-6)",
        color: "var(--light-gray)",
        marginTop: 2,
    },
    companyDates: {
        fontSize: "var(--fs-6)",
        color: "var(--light-gray-70)",
        marginTop: 1,
    },
    companyChevron: {
        color: "var(--light-gray)",
        fontSize: 12,
        flexShrink: 0,
    },
    rolesContainer: {
        display: "flex",
        flexDirection: "row",
        paddingLeft: 16,
        paddingBottom: 12,
        position: "relative",
    },
    connectorLine: {
        width: 1,
        background: "var(--jet)",
        marginLeft: 23,   // aligns under center of the 48px logo
        marginRight: -4,
        flexShrink: 0,
        borderRadius: 1,
    },
    roleItem: {
        marginBottom: 8,
    },
    roleHeader: {
        display: "flex",
        alignItems: "flex-start",
        justifyContent: "space-between",
        gap: 10,
        padding: "8px 12px 8px 0",
        cursor: "pointer",
        borderRadius: 8,
        transition: "background 150ms",
    },
    roleHeaderLeft: {
        display: "flex",
        alignItems: "flex-start",
        gap: 10,
    },
    roleDot: {
        width: 8,
        height: 8,
        borderRadius: "50%",
        background: "var(--orange-yellow-crayola)",
        flexShrink: 0,
        marginTop: 6,
    },
    roleTitle: {
        fontSize: "var(--fs-5)",
        fontWeight: 600,
        color: "var(--white-2)",
        lineHeight: 1.3,
    },
    roleMeta: {
        fontSize: "var(--fs-6)",
        color: "var(--light-gray)",
        marginTop: 2,
    },
    chevron: {
        color: "var(--light-gray)",
        fontSize: 11,
        marginTop: 6,
        flexShrink: 0,
    },
    bulletList: {
        paddingLeft: 18,
        // marginTop: 3,
        listStyleType: "disc",
    },
    bulletPoint: {
        fontSize: "var(--fs-6)",
        color: "var(--light-gray)",
        lineHeight: 1.6,
        display: "list-item",
        wordBreak: "break-word",
        overflowWrap: "break-word",
        marginBottom: 6,
    },
};