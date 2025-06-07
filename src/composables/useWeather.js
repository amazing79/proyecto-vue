import { useWeatherStore } from "@/stores/weatherStore";
import { getTemperatura } from "@/helpers/getWeather";

export const useWeather = async () => {
    const newValue = await getTemperatura();
    const weatherStore = useWeatherStore();

    weatherStore.setTemperatura(newValue);
}