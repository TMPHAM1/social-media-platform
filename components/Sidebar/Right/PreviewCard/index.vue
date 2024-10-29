<template>
  <div class="m-2 border rounded-2xl    ">
        <h1>
            {{ props.title }}
        </h1>
  </div>
</template>

<script lang="ts" setup>
    const props = defineProps({
        title: {
            type: String,
            required: true,
        }
    })
</script>

<style>

</style>


<script src="https://cdn.jsdelivr.net/gh/videsigns/webflow-tools@latest/multi-step.js"></script>

<script>
// Multistep form submission customization
document.addEventListener('DOMContentLoaded', function () {
  console.log('loaded');
  $('form#wf-form-Multistep-Form2').on('submit', function(e) {
      e.preventDefault(); // Prevent immediate submission
			
      let $form = $(this);
      
      $form.find('button').remove();
      
      // Get all form data
    	let submittedData = $(this).serializeArray(); // Array of {name: 'fieldName', value: 'fieldValue'}

      // Log submitted data or use it as needed
      //console.log("submittedData Before:", submittedData);
      
      // Remove any fields that are empty (or optionally remove specific fields)
      //submittedData = submittedData.filter(field => field.value.trim() !== '');
      
      // Remove empty fields from the form DOM
     // $form.find('input, select, textarea, radio').each(function() {
      //  if (!$(this).attr('name') || !$(this).val()) {
      //    $(this).remove(); // Remove inputs with no name or empty value
      //  }
   //   });
      
      // Check if "Model-Type" field value is "hospitality"
    	const isHospitality = submittedData.some(field => field.name === 'Model-Type' && field.value === 'Hospitality');

      if (isHospitality) {
        // Remove fields with name 'style', 'model', and 'Colorway'
      	submittedData = submittedData.filter(field => !['Style', 'Model', 'Colorway', 'Furniture-Package-28', 'Furniture-Package-36', 'Tech-Package-28', 'Tech-Package-36', 'Outdoor-Living-Package-28', 'Outdoor-Living-Pacakge-36', 'Cozy-Courtyard-Package-28', 'Cozy-Courtyard-Package-36', 'Outdoor-Shower-Package-28', 'Outdoor-Shower-Package-36'].includes(field.name));
      	
        // Clear the form and append the filtered data back to ensure it's sent to Webflow
    		$form.find('input[name="Style"], input[name="Model"], input[name="Colorway"], input[name="Furniture-Package-28"], input[name="Furniture-Package-36"], input[name="Tech-Package-28"], input[name="Tech-Package-36"], input[name="Outdoor-Living-Package-28"], input[name="Outdoor-Living-Pacakge-36"], input[name="Cozy-Courtyard-Package-28"], input[name="Cozy-Courtyard-Package-36"], input[name="Outdoor-Shower-Package-28"], input[name="Outdoor-Shower-Package-36"]').remove();
    	}
      
      // Check if "Model-Type" field value is "Dwellings"
    	const isDwellings = submittedData.some(field => field.name === 'Model-Type' && field.value === 'Dwellings');

      if (isDwellings) {
        // Remove fields with name 'style', 'model', and 'Colorway'
      	submittedData = submittedData.filter(field => !['Hospitality-Style'].includes(field.name));
      	
        // Clear the form and append the filtered data back to ensure it's sent to Webflow
    		$form.find('input[name="Hospitality-Style"]').remove();
    	}
			
      //console.log("submittedData After filtering:", submittedData);
      
      // Submit the form naturally, allowing Webflow to handle the email notification
      this.submit();
    });
  });
</script>