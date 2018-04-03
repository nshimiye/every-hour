/*
 * HomePage Messages
 *
 * This contains all the text for the HomePage component.
 */
import { defineMessages } from 'react-intl';

export default defineMessages({
  startProjectHeader: {
    id: 'everyhour.containers.HomePage.start_project.header',
    defaultMessage: 'Every Hour',
  },
  startProjectMessage: {
    id: 'everyhour.containers.HomePage.start_project.message',
    defaultMessage: 'Generate a trivia question, price update, or any timed update ... EveryHour!',
  },
  trymeHeader: {
    id: 'everyhour.containers.HomePage.tryme.header',
    defaultMessage: 'Try me!',
  },
  trymeMessage: {
    id: 'everyhour.containers.HomePage.tryme.message',
    defaultMessage: 'Show hourly stock price by',
  },
  trymeAtPrefix: {
    id: 'everyhour.containers.HomePage.tryme.atPrefix',
    defaultMessage: '@',
  },
});
