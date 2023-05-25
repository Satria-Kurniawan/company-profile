type SectionHeaderProps = {
  title: string;
  subtext: string;
};

export default function SectionHeader({ title, subtext }: SectionHeaderProps) {
  return (
    <header className="max-w-[20rem] mx-auto">
      <h1 className="text-center text-2xl font-bold">{title}</h1>
      <p className="text-center">{subtext}</p>
      <div className="h-1 w-20 bg-gradient-primary rounded-full mt-3 mx-auto" />
    </header>
  );
}
