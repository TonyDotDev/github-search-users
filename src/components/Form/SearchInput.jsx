import { SearchIcon } from '@chakra-ui/icons';
import { Input, InputGroup, InputLeftElement, FormControl, FormLabel } from '@chakra-ui/react';

export const SearchInput = ({
  registration,
  label,
  labelFontSize,
  fontColor,
  maxWidth = '600px',
}) => {
  return (
    <FormControl maxWidth={maxWidth}>
      {label && (
        <FormLabel color={fontColor} fontSize={labelFontSize} textAlign="center">
          {label}
        </FormLabel>
      )}
      <InputGroup>
        <InputLeftElement pointerEvents="none" children={<SearchIcon color="gray.400" />} />
        <Input color={fontColor} focusBorderColor="teal.400" {...registration} />
      </InputGroup>
    </FormControl>
  );
};
