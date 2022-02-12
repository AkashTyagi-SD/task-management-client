import { FC } from "react";
import { PresentationalProps } from "./file-upload-model";
import "./fileup.css";

export const FileUploaderPresentationalComponent: FC<PresentationalProps> = (
  props
) => {
  const {
    dragging,
    file,
    onSelectFileClick,
    onDrag,
    onDragStart,
    onDragEnd,
    onDragOver,
    onDragEnter,
    onDragLeave,
    onDrop,
  } = props;

  let uploaderClasses = "file-uploader";
  if (dragging) {
    uploaderClasses += " file-uploader--dragging";
  }

  const fileName = file ? file.name : "No File Uploaded!";

  return (
    <div
      className={uploaderClasses}
      onDrag={onDrag}
      onDragStart={onDragStart}
      onDragEnd={onDragEnd}
      onDragOver={onDragOver}
      onDragEnter={onDragEnter}
      onDragLeave={onDragLeave}
      onDrop={onDrop}
    >
      <div className="file-uploader__contents">
        <span className="file-uploader__file-name">{fileName}</span>
        <span>Drag & Drop File</span>
        <span>or</span>
        <span onClick={onSelectFileClick}>Select File</span>
      </div>
      {props.children}
    </div>
  );
};
