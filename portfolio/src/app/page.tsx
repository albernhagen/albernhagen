"use client";

import { IKContext, IKImage } from "imagekitio-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function Home() {
  const [url, setUrl] = useState<string>("/20230721-112343.jpg");

  function clickButton() {
    setUrl("/20230716-203259.jpg");
  }

  return (
    <>
      <MyImage url={url}></MyImage>
      <Button variant="outline" onClick={clickButton}>
        Button
      </Button>
    </>
  );
}

export function MyImage({ url }: { url: string }) {
  return (
    <IKContext
      urlEndpoint="https://ik.imagekit.io/albernhagen"
      publicKey="public_A2Vbt/wqy3V60ULQolSW7exHuVU="
    >
      <IKImage path={url} />
    </IKContext>
  );
}
