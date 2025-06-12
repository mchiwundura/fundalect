import { ScrollView, Text, View } from "react-native";
import React, { Component } from "react";
import CourseSearch from "@/components/courseSearch";
import { useRouter } from "expo-router";

export default function search() {
  const router = useRouter();

  return (
    <ScrollView style={{ flex: 1 }}>
      <CourseSearch callToAction={() => router.back()} />
    </ScrollView>
  );
}
