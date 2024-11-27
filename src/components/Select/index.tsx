import {
  createListCollection,
  SelectContent,
  SelectItem,
  SelectRoot,
  SelectRootProps,
  SelectTrigger,
  SelectValueText,
} from "@chakra-ui/react";
import { LuChevronsUpDown } from "react-icons/lu";
import { Text } from "@/components/Text";

interface SelectProps extends Omit<SelectRootProps, "collection"> {
  options: { label: string; value: string }[];
  label: string;
}
export const Select: React.FC<SelectProps> = ({ options, label, ...props }) => {
  const optionsCollection = createListCollection({
    items: options?.map((option) => ({
      label: option.label,
      value: option.value,
    })),
  });

  return (
    <SelectRoot
      defaultValue={[optionsCollection?.items[0]?.value]}
      key={""}
      size={"md"}
      collection={optionsCollection}
      position="relative"
      margin="1rem 0"
      minWidth="80px"
      {...props}
    >
      <Text fontSize="12px" variant="body1">
        {label}
      </Text>
      <SelectTrigger
        borderRadius="8px"
        backgroundColor="#F7F8F945"
        cursor="pointer"
      >
        <SelectValueText />
        <LuChevronsUpDown />
      </SelectTrigger>

      <SelectContent
        position="absolute"
        top={label ? "70px" : "55px"}
        width="100%"
      >
        {optionsCollection?.items.map((option) => (
          <SelectItem item={option} key={option.value}>
            {option.label}
          </SelectItem>
        ))}
      </SelectContent>
    </SelectRoot>
  );
};
