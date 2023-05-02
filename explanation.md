

#introduction 

The flow begins with a form(firstForm) that sellers can fill out with the zipcode, size of the property, 
the price they want for it, and the type of estate it is.

Once they fill it out, they are redirected to a new page(/buyers) where they will see a list
of potential buyers, each possesing a button to select them.

Additionally, there is a second form in the same page, that enables the seller to add
their name, email and phone.

Once this second form is filled out, the user's information plus the buyers they selected 
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

With useEffect, we  and use them as part of an API endpoint.






