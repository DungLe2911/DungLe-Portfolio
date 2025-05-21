import '../Style/DownloadBtn.css'
import resume from '../Asset/Dung Le Resume 03_12_25.pdf'
export default function DownloadBtn() {
    return (
        <a href={resume} download className="download-btn">
            <button>Download Resume (PDF)</button>
        </a>
    )
}