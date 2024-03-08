import clsx from "clsx";
import { SiGithub, SiTwitter } from "react-icons/si";

import * as w from "@/styles/whole.css";
import * as s from "./page.css";

import { Hero } from "@/components/route/home/Hero/Hero";
import { HomeCard } from "@/components/route/home/HomeCard/HomeCard";
import { TextLink } from "@/components/elements/TextLink/TextLink";
import {
    WorkCard,
    WorkCardComponet,
} from "@/components/route/home/WorkCard/WorkCard";

interface TimelineContents {
    date: string;
    title: string;
    content: string;
}

const timeline_contents: TimelineContents[] = [
    {
        date: "2007-03",
        title: "この世に誕生",
        content: "",
    },
    {
        date: "2022-04",
        title: "長野工業高等専門学校 工学科に入学",
        content:
            "2年進級時に情報エレクトロニクス系へまた3年進級時に情報コースへ進級",
    },
];

const works_contents: WorkCardComponet[] = [
    {
        name: "上田オンヌリ教会のホームページ",
        image_path: "uoc.rhappy.dev_.webp",
        href: "https://uoc.rhappy.dev",
    },
    {
        name: "市坂山荘のホームページ",
        image_path: "www.ichizakasansou-bessho.com_.webp",
        href: "https://www.ichizakasansou-bessho.com/",
    },
];

export default function Home() {
    return (
        <div className={clsx(w.container)}>
            <Hero />
            <section className={clsx(s.intro_wrapper)}>
                <p>
                    情報系を学んでいる高専二年生です。
                    ウェブの分野に興味があり普段はウェブサイト作ったりしています。
                    シンプルなデザインが好きで、シンプルだけど飽きないウェブサイトを目指してます。
                </p>
            </section>
            <div className={clsx(s.main_content_wrapper)}>
                <HomeCard title="On the web">
                    <table>
                        <tbody>
                            <tr>
                                <td>
                                    <SiGithub />
                                </td>
                                <td>Github</td>
                                <td>
                                    <TextLink
                                        href="https://github.com/r-happy"
                                        blank={true}
                                    >
                                        https://github.com/r-happy
                                    </TextLink>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <SiTwitter />
                                </td>
                                <td>Twitter（現X）</td>
                                <td>
                                    <TextLink
                                        href="https://twitter.com/rhappy435130"
                                        blank={true}
                                    >
                                        https://twitter.com/rhappy435130
                                    </TextLink>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </HomeCard>
                <HomeCard title="Timeline">
                    <ol className={clsx(s.timeline)}>
                        {timeline_contents
                            .slice()
                            .reverse()
                            .map((e, index) => {
                                return (
                                    <li key={index}>
                                        <div className={clsx(s.timeline_time)}>
                                            <div
                                                className={clsx(s.timeline_dot)}
                                            />
                                            <p>{e.date}</p>
                                        </div>
                                        <div
                                            className={clsx(s.timeline_content)}
                                        >
                                            <h3
                                                className={clsx(
                                                    s.timeline_content_title
                                                )}
                                            >
                                                {e.title}
                                            </h3>
                                            <p>{e.content}</p>
                                        </div>
                                    </li>
                                );
                            })}
                    </ol>
                </HomeCard>
                <HomeCard title="Works">
                    <div className={clsx(s.work_card_wrapper)}>
                        {works_contents.map((e, index) => {
                            return (
                                <WorkCard
                                    key={index}
                                    name={e.name}
                                    image_path={`/img/${e.image_path}`}
                                    href={e.href}
                                />
                            );
                        })}
                    </div>
                </HomeCard>
            </div>
        </div>
    );
}
