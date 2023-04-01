import React from "react";
import { meta } from "~/constants";
import Head from "next/head";

type Props = {
  title?: string;
};

const CustomHead = ({ title = "Finance Planner" }: Props) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta
        name="description"
        content="Financial planner tool part of the ToDanni tool suite"
      />
      <meta name="description" content={meta.description} />
      <meta name="og:title" content={title} />
      <meta name="og:image" content="/meta_image.png" />
      <meta name="og:image:width" content="1280" />
      <meta name="og:image:height" content="640" />
      <meta name="og:description" content={meta.description} />
      <meta name="og:type" content="website" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={meta.description} />
      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
};

export default CustomHead;
