import React from "react";
import Link from "next/link";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface Props {
  name: string;
  desc: string;
}

const ActivityCard = ({ name, desc }: Props) => {
  return (
    <Card className="bg-slate-200 transition-all shadow-none hover:shadow-2xl hover:shadow-slate-900/[0.2] min-w-80">
      <CardHeader>
        <CardTitle className="text-xl">{name}</CardTitle>
        <CardDescription className="text-base text-slate-600">
          {desc}
        </CardDescription>
        <div className="flex justify-evenly">
          <Link href="#" className="underline" style={{ color: "blue" }}>
            Link1
          </Link>
          <p>·</p>
          <Link href="#" className="underline" style={{ color: "blue" }}>
            Link2
          </Link>
          <p>·</p>
          <Link href="#" className="underline" style={{ color: "blue" }}>
            Link3
          </Link>
        </div>
      </CardHeader>
    </Card>
  );
};

export default ActivityCard;
