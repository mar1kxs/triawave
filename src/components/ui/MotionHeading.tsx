import { Children, isValidElement, type HTMLAttributes, type ReactNode } from "react";

type MotionHeadingProps = HTMLAttributes<HTMLHeadingElement> & { as?: "h1" | "h2" };

/** Explicit editorial line breaks remain part of React's server and client markup. */
export function MotionHeading({ as: Tag = "h2", children, ...props }: MotionHeadingProps) {
  const lines: ReactNode[][] = [[]];
  Children.toArray(children).forEach((child) => {
    if (isValidElement(child) && child.type === "br") lines.push([]);
    else lines[lines.length - 1].push(child);
  });

  return (
    <Tag {...props}>
      {lines.map((line, index) => (
        <span className="motion-line" key={index}>
          <span className="motion-line-inner">{line}</span>
          {index < lines.length - 1 && " "}
        </span>
      ))}
    </Tag>
  );
}
