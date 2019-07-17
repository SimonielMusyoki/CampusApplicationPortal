/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
(function() {
        jQuery.fn.validateAdditionaldataForm = function(){
            jQuery(this).click(function() {
                
                var additionaldataother, atLeastOneIsChecked,errorHtml = '', err = false;
                atLeastOneIsChecked = $('input:checkbox').is(':checked');
                additionaldataother = $.trim(jQuery('#additionaldata_other').val());
                if(additionaldataother == '' && !atLeastOneIsChecked){
                    errorHtml += '<li> Additional data field is required</li>';
                    err = true;
                }else if(additionaldataother != ''){
                    err = false;
                }
                else if(atLeastOneIsChecked){
                    err = false;
                }
                
                if (err) {
                        jQuery('#errorMsg').html('<ul>' + errorHtml + '</ul>');
                        return false;
                } else {
                        return true;
                }
            });
        }
        
        jQuery.fn.validateAcadmicprofilesave = function(){
         jQuery(this).click(function() {
             
             var acadmic_school_name, acadmic_school_address, upload_birth_certificate, upload_photo_id, upload_birth_certificate_id,upload_certificate_id,isothercountry,upload_photo,upload_certificate, acadmic_school_name,  errorHtml = '', err = false;
             var high_school_mean_grade, mathematics, english, kiswahili;
                acadmic_school_name = $.trim(jQuery('#acadmic_school_name').val());
                acadmic_school_address = $.trim(jQuery('#acadmic_school_address').val());

                upload_photo_id = jQuery('#upload_photo_id').val();
                upload_certificate_id = jQuery('#upload_certificate_id').val();
                upload_birth_certificate_id = jQuery('#upload_birth_certificate_id').val();

                
                var validFileExtensions = ["jpg", "jpeg", "gif", "png", "bmp"];
                
               
                high_school_mean_grade = jQuery('#high_school_mean_grade').val();
                mathematics = jQuery('#mathematics').val();
                english = jQuery('#english').val();
                kiswahili = jQuery('#kiswahili').val();
                
                
                if(acadmic_school_name == ''){
                    errorHtml += '<li> School name field is required</li>';
                    err = true;
                }
                
                if(acadmic_school_address == ''){
                    errorHtml += '<li> School address field is required</li>';
                    err = true;
                }
                if(upload_photo_id == ''){
                    upload_photo = jQuery('#upload_photo').val();
                    upload_photo = upload_photo.substr( (upload_photo.lastIndexOf('.') +1) ).toLowerCase();
                    if(jQuery('#upload_photo').length >  0){
                    if(upload_photo == ''){
                        errorHtml += '<li> Upload student photo field is required</li>';
                        err = true;
                    }
                    else if(jQuery.inArray( upload_photo, validFileExtensions ) == -1) {
                          jQuery('#upload_photo').val('');
                          errorHtml += '<li> Upload student photo field is required</li>';
                          err = true;
                    }
                }
            }
                
            isothercountry = $('#upload_birth_certificate:visible').length;
            if (isothercountry && (upload_birth_certificate_id=="" || upload_birth_certificate_id == undefined)) {
                upload_birth_certificate = jQuery('#upload_birth_certificate').val();
                if(upload_birth_certificate_id == ""){
                upload_birth_certificate = upload_birth_certificate.substr( (upload_birth_certificate.lastIndexOf('.') +1) ).toLowerCase();
            }
            upload_birth_certificate = upload_birth_certificate.substr( (upload_birth_certificate.lastIndexOf('.') +1) ).toLowerCase();
                if (jQuery('#upload_birth_certificate').length > 0) {
                    if (upload_birth_certificate == '') {
                        errorHtml += '<li> Upload Birth Certificate field is required</li>';
                        err = true;
                    }
                    else if (jQuery.inArray(upload_birth_certificate, validFileExtensions) == -1) {alert(validFileExtensions    );
                        jQuery('#upload_birth_certificate').val('');
                        errorHtml += '<li> Upload Birth Certificate field is required</li>';
                        err = true;
                    }
                }
            }
                
             if (upload_certificate_id == '' || upload_certificate_id == undefined) {
                upload_certificate = jQuery('#upload_certificate').val();
                upload_certificate = upload_certificate.substr((upload_certificate.lastIndexOf('.') + 1)).toLowerCase();
                
                if (jQuery('#upload_certificate').length > 0) {

                    if (upload_certificate == '' ){
                        errorHtml += '<li> Upload academic certificate field is required</li>';
                        err = true;
                    }
                    else if (jQuery.inArray(upload_certificate, validFileExtensions) == -1) {
                        jQuery('#upload_certificate').val('');
                        errorHtml += '<li> Upload academic certificate field is required</li>';
                        err = true;
                    }
                }
            }   
                
                
                
                if(high_school_mean_grade == ''){
                    errorHtml += '<li> High School mean grade field is required. Please select at least one grade.</li>';
                    err = true;
                }
                if(mathematics == ''){
                    errorHtml += '<li> Mathematics field is required. Please select at least one grade.</li>';
                    err = true;
                }
                if(english == ''){
                    errorHtml += '<li> English field is required. Please select at least one grade.</li>';
                    err = true;
                }
                if(kiswahili == ''){
                    errorHtml += '<li> Kiswahili field is required. Please select at least one grade.</li>';
                    err = true;
                }
                
                if (err) {
                    jQuery('#errorMsg').html('<ul>' + errorHtml + '</ul>');
                    return false;
                } else {
                    return true;
                }
         });
            
        }
        
        jQuery.fn.validateprogrammeForm = function(){
            jQuery(this).click(function() {
                var  emailerror, type_of_programme, programme1, campus, subjectcom,issubjectcom,subjectcom2,issubjectcom2, sponser_type, kin_name, kin_address,kin_email, phone1, phone_kin1, sponser_type_val, sponsor_address,sponsor_email,sponsor_name,  countryCode,  errorHtml = '', err = false;
                type_of_programme = jQuery('#type_of_programme').val();
                campus = jQuery('#campus').val();
                issubjectcom = $('#subjectcom:visible').length;
                issubjectcom2 = $('#subjectcom2:visible').length;
                programme1 = jQuery('#programme1').val();
                kin_name = $.trim(jQuery('#kin_name').val());
                kin_address = $.trim(jQuery('#kin_address').val());
                countryCode = $.trim(jQuery('#kin_countrycode').val());
                phone1 = $.trim(jQuery('#phone1').val());
                phone_kin1 = $.trim(jQuery('#phone_kin1').val());
                kin_email = $.trim(jQuery('#kin_email').val());
                sponser_type = $('input:radio').is(':checked');
                sponsor_name = $.trim(jQuery('#sponsor_name').val());
                sponsor_address = $.trim(jQuery('#sponsor_address').val());
                sponsor_email = $.trim(jQuery('#sponsor_email').val());
                sponser_type_val = $.trim($('input[name=sponser_type]:checked').val());
                
                if(type_of_programme == '0' || type_of_programme == ''){
                    errorHtml += '<li> Type of Programme field is required. Please select at least one.</li>';
                    err = true;
                }
                
                if(campus == '0' || campus == ''){
                    errorHtml += '<li> Campus field is required. Please select at least one.</li>';
                    err = true;
                }
                if(programme1 == '0' || programme1 == '' ){
                    errorHtml += '<li> Choose first programme field is required. Please select at least one.</li>';
                    err = true;
                }
                    
                if (issubjectcom) {
                    subjectcom = jQuery('#subjectcom').val();
                    if (subjectcom == '0' || subjectcom == '') {
                        errorHtml += '<li> Please choose first subject combinations.</li>';
                        err = true;
                    }
                }
                if (issubjectcom2) {
                    subjectcom2 = jQuery('#subjectcom2').val();
                    if (subjectcom2 == '0' || subjectcom2 == '') {
                        errorHtml += '<li> Please choose second subject combinations.</li>';
                        err = true;
                    }
                }
               
                if(sponser_type == ''){
                    errorHtml += '<li> Sponsor field is required. Please select at least one.</li>';
                    err = true;
                }
                if(sponser_type_val != 'self' && sponser_type_val != ''){
                if (sponsor_name == "") {
                       errorHtml += '<li>Sponsor name is required</li>';
                       err = true;
                }
                if (sponsor_address == "") {
                       errorHtml += '<li>Sponsor address number is required</li>';
                       err = true;
                }
                if (phone1 == "") {
                       errorHtml += '<li>Sponsor telephone number is required</li>';
                       err = true;
                } 
                if (sponsor_email == "") {
                                
                                errorHtml += '<li>Sponsor email is required</li>';
                                err = true;
                        } else {
                                emailerror = validateEmail(sponsor_email);
                                // alert(emailerror);
                                if (emailerror == true) {
                                        errorHtml += '<li>not a valid Email</li>';
                                        err = true;
                                }
                        }
                    }
                if(kin_name == ''){
                    errorHtml += '<li> KIN name field is required</li>';
                    err = true;
                }
                if(kin_address == ''){
                    errorHtml += '<li> KIN address field is required</li>';
                    err = true;
                }
                  
                
                if (phone_kin1 == '') {
                       errorHtml += '<li>KIN telephone number is required</li>';
                       err = true;
                } 
                if (kin_email == "") {
                                
                                errorHtml += '<li>KIN Email is required</li>';
                                err = true;
                        } else {
                                emailerror = validateEmail(kin_email);
                                // alert(emailerror);
                                if (emailerror == true) {
                                        errorHtml += '<li>not a valid Email</li>';
                                        err = true;
                                }
                        }
               
                if (err) {
                        jQuery('#errorMsg').html('<ul>' + errorHtml + '</ul>');
                        return false;
                } else {
                    return true;
                }
            });
        }
        
        jQuery.fn.validateofflinepaymentForm = function() {
                jQuery(this).click(function() {
                        var accountno, bankdeposited, branch, date, amount, narrative, transactionId,upload_reciept, agree, errorHtml = '', err = false;
                        accountno = $.trim(jQuery('#accountno').val());
                        bankdeposited = $.trim(jQuery('#bank_deposited').val());
                        branch = $.trim(jQuery('#branch_name').val());
                        date = jQuery('#date1').val();
                        amount = $.trim(jQuery('#amount').val());
                        narrative = $.trim(jQuery('#narrative').val());
                        transactionId = $.trim(jQuery('#ref_no').val());
                        upload_reciept = jQuery('#upload_reciept').val();
                        agree = jQuery('#agree').is(":checked");
                        var regex = new RegExp("(.*?)\.(jpg|jpeg|png|gif|bmp)$");
                        //errorHtml ="<ul>"
                        /*if(accountno !="" && isNaN(accountno)){
                         errorHtml+='<li> Account number should be a number</li>';
                         err = true
                         }*/
                        if(bankdeposited == ''){
                            errorHtml += '<li> Bank deposited field is required</li>';
                            err = true;
                        }
                        if(branch == ''){
                            errorHtml += '<li> Branch name field is required</li>';
                            err = true;
                        }
                        if(date == ''){
                            errorHtml += '<li> Transaction date field is required</li>';
                            err = true;
                        }
                        if(amount == ''){
                            errorHtml += '<li> Amount field is required</li>';
                            err = true;
                        }
                        if (amount != "" && isNaN(amount)) {
                                errorHtml += '<li> Amount should be a number</li>';
                                err = true;
                        }
                        if(narrative == ''){
                            errorHtml += '<li> Narrative is required</li>';
                            err = true;
                        }
                        if(transactionId == ''){
                            errorHtml += '<li> Transaction ID/Ref. No field is required</li>';
                            err = true;
                        }
                        
                        if(jQuery('#upload_reciept').length >  0){
                        if(upload_reciept == ''){
                            errorHtml += '<li> Upload receipts field is required</li>';
                            err = true;
                        }
                        else if(!(regex.test(upload_reciept))) {
                            jQuery('#upload_reciept').val('');
                            errorHtml += '<li> Upload receipts field is required</li>';
                            err = true;
                        }
                    }
                        if (!agree) {
                                errorHtml += '<li> Please agree with the payment</li>';
                                err = true
                        }
                        if (err) {
                                jQuery('#errorMsg').html('<ul>' + errorHtml + '</ul>');
                                return false;
                        } else {
                                return true;
                        }
                });
        }
        
        jQuery.fn.validateonlinepaymentForm = function() {
                jQuery(this).click(function() {
                        var date, amount, transactionId1,identity_no,agree, errorHtml = '', err = false;
                        date = jQuery('.date1').val();
                        amount = $.trim(jQuery('.amount').val());
                        identity_no = $.trim(jQuery('#identity_no').val());
                        transactionId1 = $.trim(jQuery('#refs_no').val());
                        agree = jQuery('.agree').is(":checked");
                        var regex = new RegExp("(.*?)\.(jpg|jpeg|png|gif|bmp)$");
                        //errorHtml ="<ul>"
                        /*if(accountno !="" && isNaN(accountno)){
                         errorHtml+='<li> Account number should be a number</li>';
                         err = true
                         }*/
                       
                        
                        if(transactionId1 == ''){
                            errorHtml += '<li> Transaction ID/Ref. No field is required</li>';
                            err = true;
                        }
                        if(identity_no == ''){
                            errorHtml += '<li> Identity No field is required</li>';
                            err = true;
                        }
                        
                        if(amount == ''){
                            errorHtml += '<li> Amount field is required</li>';
                            err = true;
                        }
                        if (amount != "" && isNaN(amount)) {
                                errorHtml += '<li> Amount should be a number</li>';
                                err = true;
                        }
                        if(date == ''){
                            errorHtml += '<li> Transaction date field is required</li>';
                            
                            err = true;
                        }
                        if (!agree) {
                                errorHtml += '<li> Please agree with the payment</li>';
                                err = true
                        }
                        if (err) {
                                jQuery('.errorMsg').html('<ul>' + errorHtml + '</ul>');
                                return false;
                        } else {
                                return true;
                        }
                });
        }

        jQuery.fn.validateVerification = function() {
                jQuery(this).click(function() {
                        var date, agree, errorHtml = '', err = false;
                        date = jQuery('#date').val();
                        agree = jQuery('#agree').is(":checked");
                        if (date == "") {
                                errorHtml += '<li> date field is required</li>';
                                err = true
                        }
                        if (!agree) {
                                errorHtml += '<li> Please agree with the verification</li>';
                                err = true
                        }

                        if (err) {
                                jQuery('#errorMsg').html('<ul>' + errorHtml + '</ul>');
                                return false;
                        } else {
                                return true;
                        }
                });
        }

        jQuery.fn.searchData = function() {
                jQuery('#search_mobile').keyup(function(e) {
                        jQuery.validateNumber(this);
                });
               
                jQuery(this).click(function() {
                        var surName, mobile, countrycode,  errorMsg = '', err = false;
                        surName = jQuery('#search_surname').val();
                        mobile = jQuery('#search_mobile').val();
                        countrycode = jQuery("#countrycode").val();
                        
                        //if(surName =="" && mobile=="") return false;
                        if (surName == "" || surName == " ") {
                                errorMsg += '<li>Enter surname in search</li>';
                                err = true;
                        }
                        if (mobile == "") {
                                errorMsg += '<li>Enter mobile in search</li>';
                                err = true;
                        }
                        if (err == true) {
                                jQuery('#errorseacrh').html('<ul>' + errorMsg + '</ul>');
                        } else {
                                jQuery('#errorseacrh').html('');
                                jQuery.ajax({
                                        type: 'POST',
                                        url: ROUTED_PATH + '/index/fetchallinformation/mobile/' + mobile + '/surname/' + surName + '/countrycode/' + countrycode + '/leadsrc/REGISTRATION',
                                        beforeSend: function() {

                                        },
                                        success: function(responseData, status, XMLHttpRequest) {
                                                var result = parseInt(responseData);
                                                if (result == "" || isNaN(result)) {
                                                        jQuery('#errorseacrh').html('<ul><li>No search Result found.Try again!!!</li></ul>');
                                                } else {
                                                        location.reload();
                                                }

                                        }
                                });
                        }
                });

        }

        jQuery.fn.bringNewForm = function() {
		
             jQuery(this).click(function() {
			/*
                        jQuery.ajax({
                                type: 'POST',
                                url: ROUTED_PATH + '/index/fetchnewform',
                                beforeSend: function() {
                                },
                                success: function(responsedata, status, XMLHttpRequest) {
                                        location.reload();
                                }
                        });*/
			// hide the form only
			$(".error").html("");
			$("#search_surname").val("");
		        $("#search_mobile").val("");
			$(".hide-show-form").slideUp(500);

                });
	   
        }

        jQuery.fn.moveCursor = function() {
                jQuery(this).each(function() {
                        var textValue, textBoxId, maxLength, strLength, nextId = '', unvalidatedValue, varLength;
                        maxLength = jQuery(this).attr('maxlength');
                        jQuery(this).keyup(function(e) {
                                jQuery.validateNumber(this);
                               /* textValue = jQuery(this).val();
                                nextId = jQuery(this).next('input.small-textbox').attr('id');
                                if (!nextId) {
                                        nextId = jQuery(this).next('input.small-textbox1').attr('id');
                                }
                                strLength = textValue.length;
                                if (strLength == maxLength) {
                                        jQuery('#' + nextId).focus();
                                        //jQuery('#' + nextId).moveCursor();
                                }*/
                        });
                });
        }

        jQuery.validateNumber = function(txb) {
                var textBoxId = txb.id;
                txb.value = txb.value.replace(/[^\0-9]/g, "");
                if (textBoxId.search('country') > -1) {
                        txb.value = txb.value.replace(/[&\/\\#, ()$~%.'":*?<>{}]/g, "");
                } else {
                        txb.value = txb.value.replace(/[&\D/\\#,+ ()$!~%.'":*?<>{}]/g, "");
                }
        }

        jQuery.fn.changeOtherValue = function() {
                jQuery(this).change(function() {
                        var dropdownVal, currentId;
                        dropdownVal = jQuery(this).val();
                        currentId = jQuery(this).attr('id');
                        if (dropdownVal != 0 && dropdownVal != 'OTHER' && dropdownVal != 'Protestant' && dropdownVal != 'Diocesan Priest' && dropdownVal != 'Specify Diocese' && dropdownVal != 'Religious') {
                                jQuery('#other_' + currentId).css('display', 'none');
                        } else {
                                jQuery('#other_' + currentId).css('display', 'block');
                        }
                });
        }

        jQuery.fn.validatePersonalDetails = function() {
                jQuery(this).click(function() {
                        var surname,areacode, lastname, dob,address, isothercountry,countryCode, other_country,  phone1, emails, errormsg = '', err = false;
                        countryCode = $.trim(jQuery('#countrycode').val());
                        areacode = $.trim(jQuery('#areacode').val());
                        phone1 = $.trim(jQuery('#phone1').val());
                        lastname = $.trim(jQuery('#lastname').val());
                        dob = $.trim(jQuery('#date').val());
                        address = $.trim(jQuery('#address').val());
                        isothercountry = $('#other_country:visible').length;
                        if (isothercountry) {
                            other_country = $.trim(jQuery('#other_country').val());

                            if (other_country == "") {
                                errormsg += '<li>Other country is required</li>';
                                //jQuery('#firstname').css('border', '1px solid red');
                                jQuery('#other_country').focus();
                                err = true;
                            } else {
                                jQuery('#other_country').css('border', '1px solid #989898');
                            }
                        }
                        

                        emails = $.trim(jQuery('#emailid').val());
                        surname = $.trim(jQuery('#firstname').val());

                        if (surname == "") {
                                errormsg += '<li>Surname is required</li>';
                                //jQuery('#firstname').css('border', '1px solid red');
				 jQuery('#firstname').focus();
                                err = true;
                        } else {
                                jQuery('#firstname').css('border', '1px solid #989898');
                        }
                        if (lastname == "") {
                                errormsg += '<li>Othername is required</li>';
                                //jQuery('#firstname').css('border', '1px solid red');
				 jQuery('#lastname').focus();
                                err = true;
                        } else {
                                jQuery('#lastname').css('border', '1px solid #989898');
                        }
                        
                        if (dob == "") {
                                errormsg += '<li>Date of birth is required</li>';
                                //jQuery('#firstname').css('border', '1px solid red');
				 jQuery('#date').focus();
                                err = true;
                        } else {
                                jQuery('#date').css('border', '1px solid #989898');
                        }
                        
                        if (address == "") {
                                errormsg += '<li>Current address is required</li>';
                                //jQuery('#firstname').css('border', '1px solid red');
				 jQuery('#address').focus();
                                err = true;
                        } else {
                                jQuery('#address').css('border', '1px solid #989898');
                        }
                        
                        
                       /* if (jQuery("input[name*='campus']:checked").length < 1) {
                                errormsg += '<li>Plese select atleast one campus.</li>';
                                $('#a, #b, #c, #d').css('outline-color', 'red');
                                $('#a, #b, #c, #d').css('outline-style', 'solid');
                                $('#a, #b, #c, #d').css('outline-width', 'thin');
                                err = true;
                        }else{
                                $('#a, #b, #c, #d').css('outline', 'none');
                        }*/
                        if (countryCode == ""  || phone1 == "" ) {
                                if (countryCode == "") {
                                        jQuery('#countrycode').css('border', '1px solid red');
                                } else {
                                        jQuery('#countrycode').css('border', '1px solid #989898');
                                }
                              
                                if (phone1 == "") {
                                        //jQuery('#phone1').css('border', '1px solid red');
                                } else {
                                        jQuery('#phone1').css('border', '1px solid #989898');
                                }
                               
                                errormsg += '<li>Phone number is required</li>';
                                err = true;
                        }
                        else if (phone1.length < 8) {
                                errormsg += '<li>Phone number should be atleast of 8 digits</li>';
                                err = true;
                        }

                        if (emails == "") {
                                
                                errormsg += '<li>Email is required</li>';
                                //jQuery('#emailid').css('border', '1px solid red');
                                err = true;
                        } else {
                                emailerror = validateEmail(emails);
                                // alert(emailerror);
                                if (emailerror == true) {
                                        errormsg += '<li>not a valid Email</li>';
                                        //jQuery('#emailid').css('border', '1px solid red');
                                        err = true;
                                }
                        }

                        if (err == true) {
                                jQuery('.errors').html('<ul>' + errormsg + '</ul>');
                                return false;
                        }
                });
        }

        jQuery.fn.validateProgrammeDetails = function() {
                jQuery(this).click(function() {
                        var emailId, emails, errormsg = '', err = false;
                        jQuery('.email-element input').each(function() {
                                emailId = jQuery(this).attr('id');
                                emails = jQuery('#' + emailId).val();
                                if (emails != "") {
                                        //err= validateEmail(emails);
                                        var atpos = emails.indexOf("@");
                                        var dotpos = emails.lastIndexOf(".");
                                        if (atpos < 1 || dotpos < atpos + 2 || dotpos + 2 >= emails.length) {
                                                jQuery('#email').css('border', '1px solid red');
                                                errormsg += '<li>not a valid Email</li>';
                                                err = true;
                                        }
                                }
                                if (err == false) {
                                        jQuery('#' + emailId).css('border', '1px solid #989898');
                                }
                        });
                        if (err == true) {
                                // jQuery('#errormessage').html('<ul>'+errormsg+'</ul>');
                                return false;
                        }
                });
        }

        jQuery.fn.clickSponsor = function() {
                jQuery(this).click(function() {
                        var clickId = jQuery(this).attr('id');
                        if (jQuery('#' + clickId).is(':checked')) {
                                jQuery('#sponsorinfo1').hide();
                                jQuery('#sponsorinfo2').hide();

                        } else {
                                jQuery('#sponsorinfo1').show();
                                jQuery('#sponsorinfo2').show();
                        }
                });
        }

        jQuery.fn.removeImage = function() {
                jQuery(this).click(function() {
                        var r = confirm("Are you sure want to delete this file!");
                        if (r == true) {
                                var rel = jQuery(this).attr('rel');
                                jQuery.ajax({
                                        url: ROUTED_PATH + '/index/removefile/type/upload_reciept/id/' + rel,
                                        beforeSend: function() {

                                        },
                                        success: function(responseData, status, XMLHttpRequest) {
                                                var data = responseData;
                                                // alert(data);
                                                if (data == '0') {
                                                        alert('Unable to remove images, Try again');
                                                } else {
                                                        jQuery('#reciept').replaceWith('');
                                                        location.reload();
                                                }
                                        }
                                });
                        }
                });
        }


})(jQuery);


(function() {
        jQuery.fn.submitLoginForm = function() {
                jQuery(this).click(function() {
                        var uname, password, countrycode, rememberme, errorMsg = '', err = false;
                        uname = jQuery('#uname').val();
                        password = jQuery('#password').val();
                        if (uname == "") {
                                errorMsg += '<li>Username required</li>';
                                err = true;
                        }
                        if (password == "") {
                                errorMsg += '<li>Password required</li>';
                                err = true;
                        }
                        if (err == true) {
                                jQuery('#errmsg').html('<ul>' + errorMsg + '</ul>');
                                return false;
                        } else {
                                jQuery('#errmsg').html('');
                                jQuery('#submit-login').click();
                                
                                countrycode = jQuery('#country').val();
                                rememberme = (jQuery('#rememberusername').is(':checked')) ? 1 : 0;
                                jQuery.ajax({
                                        type: 'POST',
                                        url: ROUTED_PATH + '/user/logintodashboard/uname/' + uname + '/password/' + password + '/countrycode/' + countrycode + '/remember/' + rememberme,
                                        beforeSend: function() {

                                        },
                                        success: function(responseData, status, XMLHttpRequest) {
                                                var data = parseInt(responseData);
                                                if (!isNaN(data)) {
                                                        location.href = ROUTED_PATH + '/index';
                                                } else {
                                                        var error = '<li>Wrong login credentials</li>';
                                                        jQuery('#errmsg').html('<ul>' + error + '</ul>');
                                                        return false;
                                                }
                                        }
                                });
                        }
                });
        }
})(jQuery);

jQuery(document).ready(function() {
    $(document).on( 'focus', ':input', function(){
        $(this).attr( 'autocomplete', 'off' );
    });
        $(document).keypress(function(event){
                $('#submitpersonaldetail').prop('disabled', true);
                $('#programmeform').prop('disabled', true);
                $('#acadmic_profile_save').prop('disabled', true);;
                $('#additionaldata:visible').prop('disabled', true);;
                $('#verificationsubmit:visible').prop('disabled', true);;
                $('#onlinepaymentsubmit:visible').prop('disabled', true);;
                $('#offlinepaymentsubmit:visible').prop('disabled', true);;
                $('#enquirysubmit:visible').prop('disabled', true);;
        });
        $(document).keyup(function(event){
            $('#submitpersonaldetail').prop('disabled', false);
                $('#programmeform').prop('disabled', false);
                $('#acadmic_profile_save').prop('disabled', false);;
                $('#additionaldata:visible').prop('disabled', false);;
                $('#verificationsubmit:visible').prop('disabled', false);;
                $('#onlinepaymentsubmit:visible').prop('disabled', false);;
                $('#offlinepaymentsubmit:visible').prop('disabled', false);;
                $('#enquirysubmit:visible').prop('disabled', false);;
        });
        
        jQuery('input[type=text]').keyup(function(e) {
            var re = /^[a-zA-Z-,]+(\s{0,1}[a-zA-Z-, ])*$/;
            
            if(re.test(jQuery(this).val()) === false && jQuery.inArray(this.id , ["emailid", "kin_email", "sponsor_email","acadmic_collage_earned","enrollment_id"]) < 0){
               $(this).val( $.trim($(this).val().replace(/[`~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/]/gi, '')));
            }
            
            if(re.test(jQuery(this).val()) === false && this.id == "acadmic_collage_earned" ){
                if($.trim(jQuery(this).val()) == ''){
                    $(this).val($.trim($(this).val().replace(/[`~!@#$%^&*()_|+\-=?;:'",<>\{\}\[\]\\\/]/gi, '')));
                }else{
                    $(this).val($(this).val().replace(/[`~!@#$%^&*()_|+\-=?;:'",<>\{\}\[\]\\\/]/gi, ''));
                }
                
            }
            
            if(re.test(jQuery(this).val()) === false && this.id == "enrollment_id" ){
               $(this).val( $.trim($(this).val().replace(/[`~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\]/gi, '')));
            }
        });
       
        
        jQuery('#offlinepaymentsubmit').validateofflinepaymentForm();
        jQuery('#onlinepaymentsubmit').validateonlinepaymentForm();
        jQuery('#programmeform').validateprogrammeForm();
        jQuery('#verificationsubmit').validateVerification();
        jQuery('#acadmic_profile_save').validateAcadmicprofilesave();
        jQuery('#additionaldata').validateAdditionaldataForm();
        jQuery('#submitpersonaldetail').validatePersonalDetails();
        jQuery('#saveprogramme').validateProgrammeDetails();

        jQuery('#fetchdata').searchData();
        jQuery('#newdata').bringNewForm();
        jQuery('.telephone-element input').moveCursor();

        jQuery('#submitform').submitLoginForm();
        // jQuery('.telephone-element-kin input').moveCursor();

        jQuery('#country').changeOtherValue();
        jQuery('#religion').changeOtherValue();
        jQuery('#catholic_clergy').changeOtherValue();

        /***only call for catholic clergy***/
        dropdownVal = jQuery('#catholic_clergy').val();
        if (dropdownVal != 'Diocesan Priest' && dropdownVal != 'Specify Diocese' && dropdownVal != 'Religious') {
                jQuery('#other_catholic_clergy').css('display', 'none');
        } else {
                jQuery('#other_catholic_clergy').css('display', 'block');
        }

        jQuery('#sponsor_at_self').clickSponsor();
        jQuery('#parents').on('click', function() {
                var clickId = jQuery(this).attr('id');
                if (jQuery('#' + clickId).is(':checked')) {
                        jQuery('#sponsorinfo1').show();
                        jQuery('#sponsorinfo2').show();
                }
        });
        jQuery('#self_and_parents').on('click', function() {
                var clickId = jQuery(this).attr('id');
                if (jQuery('#' + clickId).is(':checked')) {
                        jQuery('#sponsorinfo1').show();
                        jQuery('#sponsorinfo2').show();
                }
        });
        jQuery('#Other').on('click', function() {
                var clickId = jQuery(this).attr('id');
                if (jQuery('#' + clickId).is(':checked')) {
                        jQuery('#sponsorinfo1').show();
                        jQuery('#sponsorinfo2').show();
                }
        });

        jQuery('#remove_image').removeImage();


        jQuery(".callbacks").colorbox({iframe: true, innerWidth: 600, innerHeight: 650
                        /*onOpen:function(){ alert('onOpen: colorbox is about to open'); },
                         onLoad:function(){ alert('onLoad: colorbox has started to load the targeted content'); },
                         onComplete:function(){ alert('onComplete: colorbox has displayed the loaded content'); },
                         onCleanup:function(){ alert('onCleanup: colorbox has begun the close process'); },
                         onClosed:function(){ alert('onClosed: colorbox has completely closed'); }*/
        });




        /***Ends here****/
});


function removeFile(id, type) {
        var r = confirm("Are you sure want to delete this file!");
        if (r == true) {
                $.ajax({
                        type: 'POST',
                        url: ROUTED_PATH + '/index/removefile/id/' + id + '/type/' + type,
                        beforeSend: function() {

                        },
                        success: function(responseData, status, XMLHttpRequest) {
                                var result = responseData;
                                if (result != "" || isNaN(result)) {
                                        location.reload();
                                } else {
                                        alert('file is not deleted successfully.');
                                }

                        }
                });
        } else {
                txt = "You pressed Cancel!";
        }


}
function validateEmail(email) {
        var emailReg = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
        var valid = emailReg.test(email);

        if (!valid) {
                return true;
        } else {
                return false;
        }
}




