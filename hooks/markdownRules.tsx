import { View } from "react-native";
import { Text, Image } from "react-native";
import { ThemedText } from "@/components/ThemedText";
import { getUniqueID } from "react-native-markdown-display";

export const rules = {
  heading1: (node, children, parent, styles) => (
    <ThemedText
      type="title"
      key={getUniqueID()}
      style={[
        styles.heading,
        styles.heading1,
        { marginVertical: 10, color: "#9584FF" },
      ]}
    >
      {children}
    </ThemedText>
  ),

  heading2: (node, children, parent, styles) => (
    <ThemedText
      type="title"
      key={getUniqueID()}
      style={[
        styles.heading,
        styles.heading2,
        { marginVertical: 10, color: "#9584FF" },
      ]}
    >
      {children}
    </ThemedText>
  ),

  heading3: (node, children, parent, styles) => (
    <ThemedText
      type="title"
      key={getUniqueID()}
      style={[styles.heading, styles.heading2, { marginVertical: 10 }]}
    >
      {children}
    </ThemedText>
  ),

  blockquote: (node, children, parent, styles) => (
    <ThemedText
      key={getUniqueID()}
      style={[
        styles.blockquote,
        { backgroundColor: "black", marginVertical: 10 },
      ]}
    >
      {children}
    </ThemedText>
  ),

  list_item: (node, children, parent, styles) => (
    <ThemedText key={getUniqueID()} style={[styles]}>
      <Bullet />
      {children}
    </ThemedText>
  ),

  paragraph: (node, children, parent, styles) => (
    <ThemedText key={getUniqueID()} style={[styles, { opacity: 0.8 }]}>
      {children}
    </ThemedText>
  ),

  table: (node, children, parent, styles) => (
    <ThemedText key={getUniqueID()} style={[styles]}>
      {children}
    </ThemedText>
  ),

  fence: (node, children, parent, styles) => {
    if (node.info === "math") {
      const lines = node.content.split("\n");
      return (
        <Text
          key={getUniqueID()}
          style={{
            fontFamily: "monospace",
            textAlign: "center",
            marginVertical: 10,
            lineHeight: 20,
          }}
        >
          {lines.map((line, index) => (
            <Text key={index}>{line + "\n"}</Text>
          ))}
        </Text>
      );
    }

    return (
      <ThemedText key={getUniqueID()} style={[styles]}>
        {node.content}
      </ThemedText>
    );
  },

  code_block: (node, children, parent, styles) => (
    <ThemedText key={getUniqueID()} style={[styles]}>
      {children}
    </ThemedText>
  ),

  image: (node, children, parent, styles) => {
    const { src, alt } = node.attributes;
    return (
      <Image
        key={getUniqueID()}
        style={[styles.image, { width: "100%", height: 200, margin: 10 }]}
        source={{
          uri: "https://raw.githubusercontent.com/mchiwundura/fundalect/main/assets/equations/eq_1126b5eb.svg",
        }}
        accessible={true}
        accessibilityLabel={alt}
      />
    );
  },
};

export default function Bullet() {
  return (
    <View>
      <View
        style={{
          width: 5,
          height: 5,
          backgroundColor: "#9584FF",
          borderRadius: 50,
          marginRight: 10,
          marginBottom: 3,
        }}
      ></View>
    </View>
  );
}
