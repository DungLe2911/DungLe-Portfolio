import { useEffect, useMemo, useState } from "react";
import "../Style/Project.css"
import { projectList } from "../Asset/Data";
import ProjectCard from "../Component/ProjectCard.js";
import { Typography, Box, Modal, Button, Autocomplete, TextField, Dialog, IconButton } from "@mui/material";
import { Carousel } from "react-responsive-carousel";
import CloseIcon from "@mui/icons-material/Close";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

export default function Project() {
    const [filterProject, setFilterProject] = useState([]);
    const [currentFilter, setCurrentFilter] = useState("");
    const [openModal, setOpenModal] = useState(false);
    const [selectedProject, setSelectedProject] = useState(null);
    const [width, setWidth] = useState(window.innerWidth);
    const [open, setOpen] = useState(false);
    const [activeImg, setActiveImg] = useState("");

    const handleOpen = (src) => {
        setActiveImg(src);
        setOpen(true);
    };


    useEffect(() => {
        const handleResize = () => setWidth(window.innerWidth);

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);


    useEffect(() => {
        if (currentFilter === "All" || currentFilter === "") {
            setFilterProject(projectList);
        } else {
            const filtered = projectList.filter(project => project.category === currentFilter);
            setFilterProject(filtered);
        }
    }, [currentFilter]);

    const applyFilter = (selectedFilter) => {
        setCurrentFilter(selectedFilter === null || selectedFilter === "All" ? "All" : selectedFilter);
    }

    const filterList = useMemo(() => {
        const categories = projectList
            .map(p => p.category?.trim())
            .filter(Boolean);

        return ["All", ...Array.from(new Set(categories))];
    }, []);

    const handleProjectDetails = (projectName) => {
        const project = projectList.find(p => p.name === projectName);
        setSelectedProject(project);
        setOpenModal(true);
    }

    const handleClose = () => {
        setOpenModal(false);
        setSelectedProject(null);
    }

    return (
        <>
            {openModal && selectedProject && (
                <Modal
                    open={openModal}
                    onClose={handleClose}
                    aria-labelledby="modal-title"
                    aria-describedby="modal-description"
                    disableEnforceFocus
                >
                    <Box className="modalBox">
                        {selectedProject?.imageList?.[0] && (
                            <>
                                <Carousel
                                    showArrows
                                    showIndicators
                                    showThumbs={false}
                                    showStatus={false}
                                    infiniteLoop
                                    emulateTouch
                                    swipeable
                                    dynamicHeight={false}
                                >
                                    {selectedProject.imageList.map((imgSrc, idx) => (
                                        <div
                                            key={idx}
                                            onClick={() => handleOpen(imgSrc.image)}
                                            style={{ cursor: "zoom-in" }}
                                        >
                                            <img
                                                src={imgSrc.image}
                                                alt={`${selectedProject.name} ${idx + 1}`}
                                                style={{ height: 300, width: "100%", objectFit: "cover" }}
                                            />
                                            <p className="legend">{imgSrc.legend}</p>
                                        </div>
                                    ))}
                                </Carousel>
                                <Dialog
                                    open={open}
                                    onClose={() => setOpen(false)}
                                    maxWidth="lg"
                                >
                                    <div style={{ position: "relative", background: "##fff", height: "fit-content" }}>
                                        <IconButton
                                            onClick={() => setOpen(false)}
                                            sx={{
                                                position: "fixed",
                                                top: 10,
                                                right: 10,
                                                zIndex: 9999,
                                                border: "1px solid #000",
                                                color: "#000",
                                                backgroundColor: "#fff",
                                                "&:hover": { backgroundColor: "#eee" },
                                            }}
                                        >
                                            <CloseIcon />
                                        </IconButton>
                                        <img
                                            src={activeImg}
                                            alt="Zoomed"
                                            style={{
                                                // maxWidth: "90vw",
                                                // maxHeight: "85vh",
                                                objectFit: "contain",
                                                display: "block",
                                            }}
                                        />
                                    </div>
                                </Dialog>
                            </>
                        )}

                        <Typography id="modal-title" variant="h6" component="h2" sx={{ mt: 1 }}>
                            {selectedProject?.name}
                        </Typography>

                        <Typography sx={{ mt: 1, fontSize: 14, opacity: 0.8 }}>
                            {selectedProject?.company} - {selectedProject?.category}
                        </Typography>

                        {/* ✅ Only this section scrolls */}
                        <Typography variant="subtitle1" sx={{ fontWeight: "bold" }}>
                            Description:
                        </Typography>
                        <Box
                            sx={{
                                display: "flex",
                                flexDirection: "column",
                                gap: 1,
                                border: "1px solid #ccc",
                                borderRadius: '8px',
                                p: 1,
                                height: 200,          // adjust this
                                maxHeight: 220,         // adjust this
                                overflowY: "auto",
                                pr: 1,                  // space for scrollbar
                            }}
                        >
                            {selectedProject?.description?.map((line, idx) => (
                                <Typography id="modal-description" key={idx} sx={{ fontSize: 14 }}>
                                    {line}
                                </Typography>
                            ))}
                        </Box>

                        {selectedProject?.deployedURL && (
                            <Box sx={{ mt: 1, display: "flex", flexDirection: "row", justifyContent: "flex-start", alignItems: "center", gap: 1 }}>
                                <Typography variant="subtitle1" sx={{ fontWeight: "bold" }}>
                                    Live-Deployment:
                                </Typography>
                                <a href={selectedProject.deployedURL} target="_blank" rel="noopener noreferrer">
                                    {selectedProject.deployedURL}
                                </a>
                            </Box>
                        )}

                        {selectedProject?.sourceCodeURL && (
                            <Box sx={{ mt: 0.25, display: "flex", flexDirection: "row", justifyContent: "flex-start", alignItems: "center", gap: 1 }}>
                                <Typography variant="subtitle1" sx={{ fontWeight: "bold" }}>
                                    Repository:
                                </Typography>
                                <a href={selectedProject.sourceCodeURL} target="_blank" rel="noopener noreferrer">
                                    {selectedProject.sourceCodeURL}
                                </a>
                            </Box>
                        )}

                        {selectedProject?.techStack && (
                            <Box sx={{ mt: 0.25 }}>
                                <Typography variant="subtitle1" sx={{ fontWeight: "bold" }}>
                                    Tech Stack:
                                </Typography>
                                <Typography variant="body2">{selectedProject.techStack.join(", ")}</Typography>
                            </Box>
                        )}

                        <Box sx={{ mt: 2, display: "flex", flexDirection: "column", gap: 1 }}>
                            <Button onClick={handleClose} variant="outlined">
                                Close
                            </Button>
                        </Box>
                    </Box>
                </Modal>
            )}
            <div className="pageContainer">
                <header>
                    <h2 className=" h2 articleTitle">
                        Projects
                    </h2>
                </header>
                {width >= 1024 ?
                    <ul className="filterList">
                        {filterList.map((filter, index) => (
                            <li
                                key={index}
                                className={`filterItem ${currentFilter === filter ? "activeFilter" : ""}`}
                                onClick={() => applyFilter(filter)}>{filter}
                            </li>
                        ))}
                    </ul>
                    :
                    <Autocomplete
                        disablePortal
                        options={filterList}
                        value={currentFilter}
                        sx={{ width: 300, mb: 2, color: 'white' }}
                        onChange={(event, newValue) => {
                            applyFilter(newValue);
                        }}
                        renderInput={(params) => (
                            <TextField
                                {...params}
                                label="Filter"
                                sx={{
                                    "& .MuiOutlinedInput-root": {
                                        backgroundColor: "white",
                                        color: "blue",
                                    },
                                    "& .MuiInputLabel-root": {
                                        color: "blue",
                                    },
                                    "& .MuiOutlinedInput-notchedOutline": {
                                        borderColor: "blue",
                                    },
                                    "&:hover .MuiOutlinedInput-notchedOutline": {
                                        borderColor: "blue",
                                    },
                                    "& .Mui-focused .MuiOutlinedInput-notchedOutline": {
                                        borderColor: "blue",
                                    },
                                }}
                            />
                        )}
                    />
                }
                <ul className="projectList">
                    {filterProject.map((project, index) => (
                        <ProjectCard onClick={() => handleProjectDetails(project.name)} key={index} project={project} />
                    ))}
                </ul>
            </div>
        </>
    )
}