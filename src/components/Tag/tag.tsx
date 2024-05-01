type TagType = {
  tag: string
}

const Tag = ({tag}: TagType) =>  {
  return (
    <span className="tag">{tag}</span>
  )
}

export default Tag