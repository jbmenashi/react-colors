import { toast } from "react-toastify"

const SingleColor = ({ color, index }) => {
  const { hex, weight } = color
  const copyToClipboard = async () => {
    if (navigator.clipboard) {
      try {
        navigator.clipboard.writeText(`#${hex}`)
        toast.success("Color copied to clipboard")
      } catch (error) {
        toast.error("Cannot copy to clipboard")
      }
    } else {
      toast.error("Cannot copy to clipboard")
    }
  }
  return (
    <article
      className={index > 10 ? "color color-light" : "color"}
      style={{ background: `#${hex}` }}
      onClick={copyToClipboard}
    >
      <p className="percent-value">{weight}%</p>
      <p className="color-value">#{hex}</p>
    </article>
  )
}
export default SingleColor
