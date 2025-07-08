export interface ItineraryDay {
  date: string;
  day: string;
  location: string;
  activities: string[];
  description: string;
}

export interface TabScreenProps {
  navigation: any;
  route: any;
}

export interface WebViewService {
  name: string;
  url: string;
  description: string;
}