import React, { useState } from "react";
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  View,
  Modal,
  Button,
} from "react-native";
import { Calendar } from "react-native-calendars";

function DatePicker({ visible, onDateSelected }) {
  return (
    <Modal visible={visible} transparent={true} animationType="fade">
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          padding: 40,
          backgroundColor: "rgba(100, 100, 100, 0.6)",
        }}
      >
        <Calendar onDayPress={onDateSelected} />
      </View>
    </Modal>
  );
}
export default DatePicker;
