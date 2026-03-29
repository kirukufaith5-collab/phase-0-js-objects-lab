//Write your code here
const attendee={
attendeeId='T001',
attendeeName ="Alice Smith",
attendeeEvent="JavaScript Conference",
ticketType="VIP",
ticketPrice="150.00"}

function logAttendeeName(attendee)
console.log(attendee);

function logTicketPrice(atendee)
console.log(attendee);

function updateTicketType(attendee,newticketType){
  attendee.ticketPrice=newTicketPrice;
}
function removeEventProperty(attendee){
delete attendee.attendeeEvent;}

function addCheckedInProperty(attendee)_{
attendee.checkedIn =true;
}


//Needed for the tests to work. Don't modify
module.exports = {
  ...(typeof attendee !== 'undefined' && { attendee }),
  ...(typeof logAttendeeName !== 'undefined' && { logAttendeeName }),
  ...(typeof logTicketPrice !== 'undefined' && { logTicketPrice }),
  ...(typeof updateTicketType !== 'undefined' && { updateTicketType }),
  ...(typeof updateTicketPrice !== 'undefined' && { updateTicketPrice }),
  ...(typeof removeEventProperty !== 'undefined' && { removeEventProperty }),
  ...(typeof addCheckedInProperty !== 'undefined' && { addCheckedInProperty })
};