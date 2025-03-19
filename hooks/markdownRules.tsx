    import { Text, Image } from "react-native";
    import { ThemedText } from "@/components/ThemedText";
    import { getUniqueID } from "react-native-markdown-display";

    export const rules = {
    heading1: (node, children, parent, styles) =>
      <Text key={getUniqueID()} style={[styles.heading, styles.heading1]}>
        {children}
      </Text>,
    heading2: (node, children, parent, styles) =>
      <ThemedText key={getUniqueID()} style={[styles.heading, styles.heading2, {marginVertical: 10}]}>
        {children}
      </ThemedText>,
    heading3: (node, children, parent, styles) =>
      <Text key={getUniqueID()} style={[styles.heading, styles.heading3]}>
        {children}
      </Text>,
    blockquote: (node, children, parent, styles) => 
      <ThemedText key={getUniqueID()} style={[styles.blockquote, {backgroundColor: "black", marginVertical: 10}]}>
        {children}
      </ThemedText>,
    paragraph: (node, children, parent, styles) => 
        <ThemedText key={getUniqueID()} style={[styles]}>
            {children}
            </ThemedText>,
    image: (node, children, parent, styles) => {
        const { src, alt } = node.attributes;
        return (
            <Image
                key={getUniqueID()}
                style={[styles.image, {width: "100%", height: 200, margin: 10}]}
                source={{ uri: src }}
                accessible={true}
                accessibilityLabel={alt}
            />
        );
    }
};
