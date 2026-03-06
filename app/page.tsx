"use client";
import { useRef, useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Music } from "lucide-react";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { db } from "@/lib/firebase";

export default function Home() {
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const playMusic = () => {
    audioRef.current?.play();
  };

  const [closed, setClosed] = useState(false);

  useEffect(() => {
    async function checkWebsite() {
      const snap = await getDoc(doc(db, "config", "site"));
      const data = snap.data();

      if (data?.isClosed) {
        setClosed(true);
      }
    }

    checkWebsite();
  }, []);

  if (closed) {
    return <h1>404 - Page Not Found</h1>;
  }

  async function closeWebsite() {
    await updateDoc(doc(db, "config", "site"), {
      isClosed: true,
    });

    location.reload();
  }

  return (
    <div className="flex flex-col justify-center items-center p-6 h-screen">
      <audio ref={audioRef} src="/sounds/bunga-abadi.mp3" loop />
      <div className="flex flex-col justify-center items-center gap-6 max-w-sm">
        <p className="text-center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. In totam
          ipsum officiis, at error reprehenderit illo beatae ab vero iure animi
          nihil voluptas perspiciatis maiores ipsam quia magni blanditiis aut?
        </p>
        <div className="flex flex-row space-x-2">
          <Button onClick={playMusic}>
            <Music />
          </Button>
          <Button onClick={playMusic}>Siap pahamm kak, lanjutt</Button>
        </div>
        <div className="flex flex-row space-x-2">
          <Button onClick={closeWebsite}>Terimakasih</Button>
        </div>
      </div>
    </div>
  );
}
