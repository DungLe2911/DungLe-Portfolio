import '../Style/DownloadBtn.css'
import resume from '../Asset/Dung Le Resume.pdf'
export default function DownloadBtn() {
    return (
        <a href={resume} download className="download-btn !bg-red-500">
            <button>Download Resume (PDF)</button>
        </a>
    )
}