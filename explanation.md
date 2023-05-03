

#introduction 

The flow begins with a form(<firstForm />) that sellers can fill out with the zipcode, size of the property, 
the price they want for it, and the type of estate it is.

Once they fill it out, they are redirected to a new page(/buyers) where they will see a list
of potential buyers, each possesing a button to select them.

Additionally, there is a second form in the same page, that enables the seller to add
their name, email and phone.

Once this second form is filled out, the user's information, plus the buyers they selected, 
will be submitted to the database, and they will be redirected to a final page(/thanks) with a 
thank you message.

Finally, there is a button that redirects the hypothetical EDC employee to a dashboard(/dashboard),
where they can see the latest information submitted to the database.

#how it works

But how does this work?

The first page contains a component called <FirstForm />, 
with a few required inputs to understand what the seller has to offer.

The second page, called /buyers, uses Next js's router to make the queries
that the seller filled out in the previous form available on this page.

We used this queries to build an API endpoint, and used useEffect to fetch
that information once.

Once the potential buyers are on screen, the user can select the ones that sound appealing.
Every time a card is selected, the onClick function youClickedMe() will store the ID as state
and disable the button. If you wish to delete that, the function deleteLi will take in an id
as paramenter and delete the selection.

Parallel to this, we're storing this information with useContext, so it's available globally.


# sending data to the DB

When the user submits the form, two things need to happen happen:
1. an async function will insert the data to our table on Supabase.
and 2. we need to go the next page.
By using next js's router, we can prevent data race by pushing us to the following page called /thanks
after the insertion happened.

# thank you page

This page is quite straightforward. Both an animation and a thank you message will kindly let you know
we have received your data.

#Dashboard
In the dashboard, the "See Data" btn will send a fetch request to Supabase to obtain the different pieces
of information that we inserted in the previous steps. 

We store that data as state and then proceed to map through it to create the body of the table, where each
table data in the row is either the id, time of creation, name, email, phone, or the buyers the seller was
interested in.


