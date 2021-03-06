import SimpleSchema from 'simpl-schema';

//provides a reason for mdg validated method error throw to notify user from error.message generated by simpleSchema
SimpleSchema.defineValidationErrorTransform(error => {
  const ddpError = new Meteor.Error(error.message);
  ddpError.error = 'validation-error';
  ddpError.details = error.details;
  ddpError.reason = error.details.reduce((a,x)=>a+x.message+". ", "")
  return ddpError;
});

//methods
import '/imports/api/users/methods'
import '/imports/api/coins/methods.js'
import '/imports/api/miscellaneous/methods'
import '/imports/api/features/methods'
import '/imports/api/redflags/methods'
import '/imports/api/exchanges/methods'
import '/imports/api/coins/methods'
import '/imports/api/miscellaneous/mime'
import '/imports/api/wallet/methods'
import '/imports/api/activityLog/methods'
import '/imports/api/developers/methods'
import '/imports/api/users/methods'
import '/imports/api/communities/methods'
import '/imports/api/hashing/methods'
import '/imports/api/auctions/methods'
import '/imports/api/rewards/methods'
import '/imports/api/summaries/methods'
import '/imports/api/problems/methods'
import '/imports/api/common/votes'
import '/imports/api/bounties/methods.js'
import '/imports/api/ratings/methods'
import '/imports/api/distribution/methods'
import '/imports/api/launchEmails/methods' //delete me after launch

import './routes.js'

import { newProblem } from '/imports/api/problems/methods'
import { saveCommunity } from '/imports/api/communities/methods'
