import '../Style/DownloadBtn.css'
// import resume from 'src/Asset/pdf/Dung Le Resume.pdf'
export default function DownloadBtn() {
    const url = `${process.env.PUBLIC_URL}/assets/pdf/Dung_Le_Resume.pdf`
    return (
        <a href={url} download className="download-btn">
            <button>Download Resume (PDF)</button>
        </a>
    )
}