import React, { ReactNode, useState } from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";

interface TabItem {
  label: string;
  content: ReactNode;
}

interface CustomTabsProps {
  tabs: TabItem[];
  centered?: boolean;
  initialIndex?: number;
}

export default function ElementTab({
  tabs,
  centered = false,
  initialIndex = 0,
}: CustomTabsProps) {
  const [value, setValue] = useState(initialIndex);

  const handleChange = (_event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Tabs value={value} onChange={handleChange} centered={centered}>
        {tabs?.map((tab, index) => (
          <Tab key={index} label={tab.label} />
        ))}
      </Tabs>
      <Box sx={{ p: 2 }}>{tabs[value].content}</Box>
    </Box>
  );
}
