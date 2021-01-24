import Container from "./container";
import cn from "classnames";

export default function Alert({ preview }) {
  return (
    <div
      className={cn("border-b", {
        "bg-accent-7 border-accent-7 text-white": preview,
        "bg-accent-1 border-accent-2": !preview,
      })}
    >
      <Container>
        <div className="py-2 text-center text-sm">
          <>
            The source code for this project is{" "}
            <a
              href={`https://github.com/cdaringe/factorio-type-kit`}
              className="underline hover:text-success duration-200 transition-colors"
            >
              available on GitHub
            </a>
            .
          </>
        </div>
      </Container>
    </div>
  );
}
