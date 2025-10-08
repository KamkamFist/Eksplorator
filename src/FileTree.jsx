function FileTree() {
  return(
    <ul>
      {
        FileSystem.children.map(
          (node) => {
            if(node.type === "file") {
              return <FileItem name={node.name} type={node.type} size={node.size}/>
            }
              return <FolderItem name={node.name} children={node.children}></FolderItem>
          }
        )
      }
      </ul>
  )
}
export default FileTree