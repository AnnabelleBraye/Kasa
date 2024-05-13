import { Fragment } from "react/jsx-runtime";

 // Remplace les sauts de ligne (\n) par des balises <br />
export const getFormattedTitle = (title: string): JSX.Element[] => {
  const parts: string[] = title.split('\n');
  const formattedTitle: JSX.Element[] = parts.map((line, index) => (
    <Fragment key={index}>
      {line}
      {index !== parts.length - 1 && <br className="break-text" />}
    </Fragment>
  ));
  
  return formattedTitle;
}