$(document).ready(function() {
    function updateCallList() {
      $.ajax({
        url: 'get_active_calls.php', // Replace with your PHP script URL
        dataType: 'json',
        success: function(data) {
          $('#call-list').empty(); // Clear existing list
          $.each(data, function(index, call) {
            // Create table row and cells for each call
            var row = $('<tr></tr>');
            row.append('<td>' + call.type + '</td>');
            row.append('<td>' + call.location + '</td>');
            row.append('<td>' + call.description + '</td>');
            // Add click event listener for call details (optional)
            row.click(function() {
              // Code to show call details in a modal or separate section
            });
            $('#call-list').append(row);
          });
        }
      });
    }
  
    // Call updateCallList initially and at regular intervals (e.g., every 5 seconds)
    updateCallList();
    setInterval(updateCallList, 5000);
  });
  