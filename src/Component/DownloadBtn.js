import '../Style/DownloadBtn.css'
import resume from '../Asset/Dung_Le_Resume.pdf'
export default function DownloadBtn() {
    // const url = `${process.env.PUBLIC_URL}/Asset/Dung_Le_Resume.pdf`
    return (
        <a href={resume} download className="download-btn">
            <button>Download Resume (PDF)</button>
        </a>
    )
}