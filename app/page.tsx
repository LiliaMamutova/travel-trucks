import css from "./page.module.css";
import HeroBlock from "@/components/sections/HeroBlock/HeroBlock";

export default function Home() {
  return (
    <div className={css.page}>
          <HeroBlock />
    </div>
  );
}
