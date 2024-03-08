import React from "react";
import clsx from "clsx";

import * as s from "./WorkCard.css";
import { TextLink } from "@/components/elements/TextLink/TextLink";
import { GoLinkExternal } from "react-icons/go";
import Image from "next/image";
import Link from "next/link";

export interface WorkCardComponet {
    name: string;
    image_path: string;
    href: string;
}

export const WorkCard: React.FC<WorkCardComponet> = ({
    name,
    image_path,
    href,
}) => {
    return (
        <div className={clsx(s.wrapper)}>
            {/* <Link href={`/${href}`}> */}
                <div className={clsx(s.image_wrapper)}>
                    <Image
                        alt="work image"
                        src={image_path}
                        height={340}
                        width={560}
                        className={clsx(s.image)}
                    />
                </div>
            {/* </Link> */}
            <div className={clsx(s.name)}>
                <TextLink href={href} blank={true}>
                    {name}
                </TextLink>
            </div>
        </div>
    );
};
