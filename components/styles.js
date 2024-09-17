import styled from 'styled-components/native';  // Corrigido para styled-components/native
import { View, Text, Image } from 'react-native'; 
import Constants from 'expo-constants';

const StatusBarHeight = Constants.statusBarHeight;

// Cores
export const Colors = { 
  primary: '#ffffff',
  secondary: '#ESETES', 
  tertiary: '#1F2937', 
  darkLight: '#9CA3AF', 
  brand: '#602809', 
  green: '#108981', 
  red: '#EF4444',
};

const { primary, secondary, tertiary, darkLight, brand, green, red } = Colors;

// Styled Components
export const StyledContainer = styled(View)`
  flex: 1;
  padding: 25px;
  padding-top: ${StatusBarHeight + 10}px; 
  background-color: ${primary};
`;

export const InnerContainer = styled(View)`
  flex: 1;
  width: 100%;
  align-items: center;
`;

export const PageLogo = styled(Image)`
  width: 250px;
  height: 200px;
`;

export const PageTitle = styled(Text)`
  font-size: 30px;
  text-align: center;
  font-weight: bold;
  color: ${brand};
  padding: 10px;
`;

export const SubTitle = styled(Text)`
  font-size: 18px;
  margin-bottom: 20px;
  letter-spacing: 1px;
  font-weight: bold;
  color: ${tertiary};
`;

export const StyledFormArea = styled(View)`
  width: 90%;
`;
