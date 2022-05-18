import React from "react";
import { NextPage } from "../typings/types";

import type { GetStaticProps } from "next";

type IndexPageProps = {};

const IndexPage: NextPage<IndexPageProps> = () => {
  const login = () => {};

  return <main className="">test</main>;
};

export const getStaticProps: GetStaticProps<IndexPageProps> = async () => {
  return {
    props: {},
  };
};

export default IndexPage;
