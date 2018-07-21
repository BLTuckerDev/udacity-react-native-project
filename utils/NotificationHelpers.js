import { Notifications, Permissions } from 'expo'
import { AsyncStorage } from 'react-native'

const QUIZ_NOTIFICATION_KEY = "udacicards:quizNotification";

export function clearDailyQuizNotification () {
    return AsyncStorage.removeItem(QUIZ_NOTIFICATION_KEY).then(Notifications.cancelAllScheduledNotificationsAsync)
}


export function getDailyQuizNotificationConfig(){
    return {
        title: "Take a Quiz!",
        body: "Don't forget to take a quiz today!",
        ios: {
            sound: true,
        },
        android: {
            sound: true,
            priority: 'high',
            sticky: false,
            vibrate: true,
        }
    }
}


export function setDailyQuizNotification(){
    AsyncStorage.getItem(QUIZ_NOTIFICATION_KEY)
        .then(JSON.parse)
        .then((data) => {
            if(data == null){
                Permissions.askAsync(Permissions.NOTIFICATIONS).then(({ status }) => {
                    if (status === 'granted') {
                        Notifications.cancelAllScheduledNotificationsAsync();

                        let tomorrow = new Date();
                        tomorrow.setDate(tomorrow.getDate() + 1);
                        tomorrow.setHours(20);
                        tomorrow.setMinutes(0);

                        Notifications.scheduleLocalNotificationAsync(
                            getDailyQuizNotificationConfig(),
                            {
                                time: tomorrow,
                                repeat: 'day',
                            }
                        );

                        AsyncStorage.setItem(QUIZ_NOTIFICATION_KEY, JSON.stringify(true))
                    }
                })
            }
        });
}