import * as React from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardHeader from "@mui/material/CardHeader";
import VisibilityIcon from "@mui/icons-material/Visibility";
import "../Style/Project.css";

export default function ProjectCard(props) {
    return (
        <Card
            className="cardComponent"
            onClick={props.onClick}
            sx={{
                maxWidth: 345,
                borderRadius: '16px',
                overflow: "hidden", // important for clean zoom
                "&:hover .cardImage": {
                    transform: "scale(1.08)",
                },
            }}
        >
            <div className="cardOverlayBg"></div>
            <div className="cardOverlayIcon">
                <VisibilityIcon className="cardOverlayIconSvg" />
            </div>

            <CardHeader
                title={`Name: ${props.project.name}`}
                subheader={`Category: ${props.project.category}`}
                titleTypographyProps={{
                    fontSize: "14px",
                    fontWeight: 600,
                    noWrap: true,
                }}
                subheaderTypographyProps={{
                    fontSize: "12px",
                    noWrap: true,
                }}
                sx={{
                    p: 0,
                    my: '5px',
                    mx: '5px',
                    "& .MuiCardHeader-title": {
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        whiteSpace: "nowrap",
                        padding: 0
                    },

                }}
            />

            <div style={{ overflow: "hidden", height: 194 }}>
                <CardMedia
                    component="img"
                    image={props.project.imageList?.[0]?.image || ""}
                    alt={props.project.name}
                    className="cardImage"
                    sx={{
                        width: "100%",
                        height: "194px",
                        objectFit: "cover",
                        transition: "transform 0.3s ease",
                        border: "1px solid #000",
                    }}
                />
            </div>
        </Card>
    );
}
