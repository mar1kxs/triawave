import { useEffect, useState } from "react";

const FAQ_OPEN_EVENT = "triawave:faq-open";

export function useExclusiveFaq(id: string) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const closeOther = (event: Event) => {
      if ((event as CustomEvent<string>).detail !== id) setOpen(false);
    };
    window.addEventListener(FAQ_OPEN_EVENT, closeOther);
    return () => window.removeEventListener(FAQ_OPEN_EVENT, closeOther);
  }, [id]);

  const toggle = () => {
    if (!open) window.dispatchEvent(new CustomEvent(FAQ_OPEN_EVENT, { detail: id }));
    setOpen(!open);
  };

  return [open, toggle] as const;
}
