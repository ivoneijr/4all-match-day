import PropTypes from 'prop-types';

export const WIDGET_SHAPE = {
  newOrders: PropTypes.number,
  comments: PropTypes.number,
  newUsers: PropTypes.number,
  pageViews: PropTypes.number
};

export const PAGE_VIEW_SHAPE = {
  month: PropTypes.string,
  views: PropTypes.number,
};

export const MESSAGE_SHAPE = {
  userName: PropTypes.string,
  portrait: PropTypes.string,
  message: PropTypes.string,
  displayPortraitLeft: PropTypes.bool,
  time: PropTypes.string
};

export const MESSAGES_SHAPE = {
  all: PropTypes.arrayOf(PropTypes.shape(MESSAGE_SHAPE)),
  new: PropTypes.string
}

export const dashboardShape = {
  widgets: PropTypes.shape(WIDGET_SHAPE),
  pageViews: PropTypes.arrayOf(PropTypes.shape(PAGE_VIEW_SHAPE)),
  messages: PropTypes.shape(MESSAGES_SHAPE)
};
