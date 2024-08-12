const HeaderBox = ({ type = "title", title, subtext, user }: HeaderBoxProps) => {
  return (
    <div className="header-box">
        <h1 className="header-box-title">
            {title}
            {type === "greeting" && (
                <span className="text-bankGradient">
                    {/* Adds a space between greeting and username */}
                    &nbsp;{user}
                </span>
            )}
        </h1>
        <p className="header-box-subtext">{subtext}</p>
    </div>
  )
}

export default HeaderBox