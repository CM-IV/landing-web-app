import { ComponentChildren } from "preact";

type childrenProps = {
    children?: ComponentChildren
}

const Button = ({ children }: childrenProps) => {

    return (
        <button class="button">{children}</button>
    )

}

export default Button;