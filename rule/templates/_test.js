/**
 * @fileoverview <%= desc %>
 * @author <%= userName %>
 * @copyright <%= year%> <%= userName %>. All rights reserved.
 * See LICENSE file in root directory for full license.
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

var rule = require("../../../lib/rules/<%= ruleId %>"),
<% if (target === "eslint") { %>
    RuleTester = require("../../../lib/testers/rule-tester");
<% } else { %>
    RuleTester = require("eslint").RuleTester;
<% } %>

//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

var ruleTester = new RuleTester();
ruleTester.run("<%= ruleId %>", rule, {

    valid: [

        // give me some code that won't trigger a warning
    ],

    invalid: [
        {
            code: "<%= invalidCode %>",
            errors: [{
                message: "Fill me in.",
                type: "Me too"
            }]
        }
    ]
});
