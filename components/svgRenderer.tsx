import React, { useEffect, useState } from "react";
import { View, ActivityIndicator } from "react-native";
import Svg, { SvgXml } from "react-native-svg";

const RemoteSvg = ({ uri }: { uri: string }) => {
  const [svgXmlData, setSvgXmlData] = useState<string | null>(null);

  useEffect(() => {
    fetch(uri)
      .then(response => response.text())
      .then(setSvgXmlData)
      .catch(err => console.error("SVG fetch error:", err));
  }, [uri]);

  if (!svgXmlData) {
    return <ActivityIndicator />;
  }

  return <SvgXml xml={svgXmlData} width={200} height={200} />;
};

export default RemoteSvg;
