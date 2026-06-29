import Button from "@/components/ui/Button";

interface PageCTAProps {
  title?: string;
  description?: string;
  buttonText?: string;
  buttonHref?: string;
}

export default function PageCTA({
  title = "Ready to Build Your Next Stage of Growth?",
  description = "Let's create a strategy that unlocks new opportunities, strengthens your business, and drives results.",
  buttonText = "Schedule a Conversation",
  buttonHref = "/contact",
}: PageCTAProps) {
  return (
    <section className="bg-navy-950 py-16 text-white sm:py-20">
      <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
        <h2 className="font-serif text-3xl font-bold sm:text-4xl">{title}</h2>
        <p className="mt-4 text-lg leading-relaxed text-navy-200">{description}</p>
        <div className="mt-8">
          <Button href={buttonHref} size="lg" showArrow>
            {buttonText}
          </Button>
        </div>
      </div>
    </section>
  );
}
