
interface Button {
  text: string
  style: string
  disabled?: string
}

export default function Button({ text, style, disabled = "" }: Button) {
  console.log("testing")

  return (
    <button className={style + disabled}>{text}</button>
  )
}