"use client";
import { IKVideo } from "imagekitio-next";

const urlEndpoint = process.env.NEXT_PUBLIC_URL_ENDPOINT;

type VideoTypes = {
    path: string;
    className?: string;
};

const Video = ({ path, className }: VideoTypes) => {
    return (
        <div>
            <IKVideo
                urlEndpoint={urlEndpoint}
                path={path}
                className={className}
                transformation={[{ width: "1920", height: "1080", q: "90" }]}
                controls
            />
        </div>
    );
};

export default Video;
