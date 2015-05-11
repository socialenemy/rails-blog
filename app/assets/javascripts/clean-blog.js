$(function() {

}), $("#name").focus(function() {
    $("#success").html("")
}), function(a) {
    function b(a) {
        return new RegExp("^" + a + "$")
    }

    function c(a, b) {
        for (var c = Array.prototype.slice.call(arguments).splice(2),
            d = a.split("."),
            e = d.pop(),
            f = 0; f < d.length; f++)
            b = b[d[f]];
        return b[e].apply(this, c)
    }

    var d = [],
        e = {
        options : {
            prependExistingHelpBlock : !1,
            sniffHtml : !0,
            preventSubmit : !0,
            submitError : !1,
            submitSuccess : !1,
            semanticallyStrict : !1,
            autoAdd : {
                helpBlocks : !0
            },
            filter : function() {
                return !0
            }
        },
        methods : {
            init : function(b) {
                var c = a.extend(!0, {}, e);
                c.options = a.extend(!0, c.options, b);
                var h = this,
                    i = a.unique(h.map(function() {
                    return a(this).parents("form")[0]
                }).toArray());
                return a(i).bind("submit", function(b) {
                    var d = a(this),
                        e = 0,
                        f = d.find("input,textarea,select").not("[type=submit],[type=image]").filter(c.options.filter);
                    f.trigger("submit.validation").trigger("validationLostFocus.validation"), f.each(function(b, c) {
                        var d = a(c),
                            f = d.parents(".form-group").first();
                        f.hasClass("warning") && (f.removeClass("warning").addClass("error"), e++)
                    }), f.trigger("validationLostFocus.validation"), e ? (c.options.preventSubmit && b.preventDefault(), d.addClass("error"), a.isFunction(c.options.submitError) && c.options.submitError(d, b, f.jqBootstrapValidation("collectErrors", !0))) : (d.removeClass("error"), a.isFunction(c.options.submitSuccess) && c.options.submitSuccess(d, b))
                }), this.each(function() {
                    var b = a(this),
                        e = b.parents(".form-group").first(),
                        h = e.find(".help-block").first(),
                        i = b.parents("form").first(),
                        j = [];
                    if (!h.length && c.options.autoAdd && c.options.autoAdd.helpBlocks && ( h = a('<div class="help-block" />'), e.find(".controls").append(h), d.push(h[0])), c.options.sniffHtml) {
                        var k = "";
                        if (
                        void 0 !== b.attr("pattern") && ( k = "Not in the expected format<!-- data-validation-pattern-message to override -->", b.data("validationPatternMessage") && ( k = b.data("validationPatternMessage")), b.data("validationPatternMessage", k), b.data("validationPatternRegex", b.attr("pattern"))),
                        void 0 !== b.attr("max") ||
                        void 0 !== b.attr("aria-valuemax")) {
                            var l = b.attr(
                            void 0 !== b.attr("max") ? "max" : "aria-valuemax");
                            k = "Too high: Maximum of '" + l + "'<!-- data-validation-max-message to override -->", b.data("validationMaxMessage") && ( k = b.data("validationMaxMessage")), b.data("validationMaxMessage", k), b.data("validationMaxMax", l)
                        }
                        if (
                        void 0 !== b.attr("min") ||
                        void 0 !== b.attr("aria-valuemin")) {
                            var m = b.attr(
                            void 0 !== b.attr("min") ? "min" : "aria-valuemin");
                            k = "Too low: Minimum of '" + m + "'<!-- data-validation-min-message to override -->", b.data("validationMinMessage") && ( k = b.data("validationMinMessage")), b.data("validationMinMessage", k), b.data("validationMinMin", m)
                        }
                        void 0 !== b.attr("maxlength") && ( k = "Too long: Maximum of '" + b.attr("maxlength") + "' characters<!-- data-validation-maxlength-message to override -->", b.data("validationMaxlengthMessage") && ( k = b.data("validationMaxlengthMessage")), b.data("validationMaxlengthMessage", k), b.data("validationMaxlengthMaxlength", b.attr("maxlength"))),
                        void 0 !== b.attr("minlength") && ( k = "Too short: Minimum of '" + b.attr("minlength") + "' characters<!-- data-validation-minlength-message to override -->", b.data("validationMinlengthMessage") && ( k = b.data("validationMinlengthMessage")), b.data("validationMinlengthMessage", k), b.data("validationMinlengthMinlength", b.attr("minlength"))), (
                        void 0 !== b.attr("required") ||
                        void 0 !== b.attr("aria-required")) && ( k = c.builtInValidators.required.message, b.data("validationRequiredMessage") && ( k = b.data("validationRequiredMessage")), b.data("validationRequiredMessage", k)),
                        void 0 !== b.attr("type") && "number" === b.attr("type").toLowerCase() && ( k = c.builtInValidators.number.message, b.data("validationNumberMessage") && ( k = b.data("validationNumberMessage")), b.data("validationNumberMessage", k)),
                        void 0 !== b.attr("type") && "email" === b.attr("type").toLowerCase() && ( k = "Not a valid email address<!-- data-validator-validemail-message to override -->", b.data("validationValidemailMessage") ? k = b.data("validationValidemailMessage") : b.data("validationEmailMessage") && ( k = b.data("validationEmailMessage")), b.data("validationValidemailMessage", k)),
                        void 0 !== b.attr("minchecked") && ( k = "Not enough options checked; Minimum of '" + b.attr("minchecked") + "' required<!-- data-validation-minchecked-message to override -->", b.data("validationMincheckedMessage") && ( k = b.data("validationMincheckedMessage")), b.data("validationMincheckedMessage", k), b.data("validationMincheckedMinchecked", b.attr("minchecked"))),
                        void 0 !== b.attr("maxchecked") && ( k = "Too many options checked; Maximum of '" + b.attr("maxchecked") + "' required<!-- data-validation-maxchecked-message to override -->", b.data("validationMaxcheckedMessage") && ( k = b.data("validationMaxcheckedMessage")), b.data("validationMaxcheckedMessage", k), b.data("validationMaxcheckedMaxchecked", b.attr("maxchecked")))
                    }
                    void 0 !== b.data("validation") && ( j = b.data("validation").split(",")), a.each(b.data(), function(a) {
                        var b = a.replace(/([A-Z])/g, ",$1").split(",");
                        "validation" === b[0] && b[1] && j.push(b[1])
                    });
                    var n = j,
                        o = [];
                    do a.each(j, function(a, b) {
                            j[a] = f(b)
                        }),
                        j = a.unique(j),
                        o = [], a.each(n, function(d, e) {
                            if (
                                void 0 !== b.data("validation" + e + "Shortcut"))
                                a.each(b.data("validation" + e + "Shortcut").split(","), function(a, b) {
                                    o.push(b)
                                });
                            else if (c.builtInValidators[e.toLowerCase()]) {
                                var g = c.builtInValidators[e.toLowerCase()];
                                "shortcut" === g.type.toLowerCase() && a.each(g.shortcut.split(","), function(a, b) {
                                    b = f(b), o.push(b), j.push(b)
                                })
                            }
                        }),
                        n =
                        o;
                    while(n.length>0);
                    var p = {};
                    a.each(j, function(d, e) {
                        var g = b.data("validation" + e + "Message"),
                            h =
                        void 0 !== g,
                            i = !1;
                        if ( g = g ? g : "'" + e + "' validation failed <!-- Add attribute 'data-validation-" + e.toLowerCase() + "-message' to input to change this message -->", a.each(c.validatorTypes, function(c, d) {
                            void 0 === p[c] && (p[c] = []), i ||
                            void 0 === b.data("validation" + e + f(d.name)) || (p[c].push(a.extend(!0, {
                                name : f(d.name),
                                message : g
                            }, d.init(b, e))),
                            i = !0)
                        }), !i && c.builtInValidators[e.toLowerCase()]) {
                            var j = a.extend(!0, {}, c.builtInValidators[e.toLowerCase()]);
                            h && (j.message = g);
                            var k = j.type.toLowerCase();
                            "shortcut" === k ? i = !0 : a.each(c.validatorTypes, function(c, d) {
                                void 0 === p[c] && (p[c] = []), i || k !== c.toLowerCase() || (b.data("validation" + e + f(d.name), j[d.name.toLowerCase()]), p[k].push(a.extend(j, d.init(b, e))),
                                i = !0)
                            })
                        }
                        i || a.error("Cannot find validation info for '" + e + "'")
                    }), h.data("original-contents", h.data("original-contents") ? h.data("original-contents") : h.html()), h.data("original-role", h.data("original-role") ? h.data("original-role") : h.attr("role")), e.data("original-classes", e.data("original-clases") ? e.data("original-classes") : e.attr("class")), b.data("original-aria-invalid", b.data("original-aria-invalid") ? b.data("original-aria-invalid") : b.attr("aria-invalid")), b.bind("validation.validation", function(d, e) {
                        var f = g(b),
                            h = [];
                        return a.each(p, function(d, g) {
                            (f || f.length || e && e.includeEmpty || c.validatorTypes[d].blockSubmit && e && e.submitting) && a.each(g, function(a, e) {
                                c.validatorTypes[d].validate(b, f, e) && h.push(e.message)
                            })
                        }), h
                    }), b.bind("getValidators.validation", function() {
                        return p
                    }), b.bind("submit.validation", function() {
                        return b.triggerHandler("change.validation", {
                            submitting : !0
                        })
                    }), b.bind(["keyup", "focus", "blur", "click", "keydown", "keypress", "change"].join(".validation ") + ".validation", function(d, f) {
                        var j = g(b),
                            k = [];
                        e.find("input,textarea,select").each(function(c, d) {
                            var e = k.length;
                            if (a.each(a(d).triggerHandler("validation.validation", f), function(a, b) {
                                    k.push(b)
                                }), k.length > e)
                                a(d).attr("aria-invalid", "true");
                            else {
                                var g = b.data("original-aria-invalid");
                                a(d).attr("aria-invalid",
                                void 0 !== g ? g : !1)
                            }
                        }), i.find("input,select,textarea").not(b).not('[name="' + b.attr("name") + '"]').trigger("validationLostFocus.validation"),
                        k = a.unique(k.sort()), k.length ? (e.removeClass("success error").addClass("warning"), h.html(c.options.semanticallyStrict && 1 === k.length ? k[0] + (c.options.prependExistingHelpBlock ? h.data("original-contents") : "") : '<ul role="alert"><li>' + k.join("</li><li>") + "</li></ul>" + (c.options.prependExistingHelpBlock ? h.data("original-contents") : ""))) : (e.removeClass("warning error success"), j.length > 0 && e.addClass("success"), h.html(h.data("original-contents"))), "blur" === d.type && e.removeClass("success")
                    }), b.bind("validationLostFocus.validation", function() {
                        e.removeClass("success")
                    })
                })
            },
            destroy : function() {
                return this.each(function() {
                    var b = a(this),
                        c = b.parents(".form-group").first(),
                        e = c.find(".help-block").first();
                    b.unbind(".validation"), e.html(e.data("original-contents")), c.attr("class", c.data("original-classes")), b.attr("aria-invalid", b.data("original-aria-invalid")), e.attr("role", b.data("original-role")), d.indexOf(e[0]) > -1 && e.remove()
                })
            },
            collectErrors : function() {
                var b = {};
                return this.each(function(c, d) {
                    var e = a(d),
                        f = e.attr("name"),
                        g = e.triggerHandler("validation.validation", {
                        includeEmpty : !0
                    });
                    b[f] = a.extend(!0, g, b[f])
                }), a.each(b, function(a, c) {
                    0 === c.length &&
                    delete b[a]
                }), b
            },
            hasErrors : function() {
                var b = [];
                return this.each(function(c, d) {
                    b = b.concat(a(d).triggerHandler("getValidators.validation") ? a(d).triggerHandler("validation.validation", {
                        submitting : !0
                    }) : [])
                }), b.length > 0
            },
            override : function(b) {
                e = a.extend(!0, e, b)
            }
        },
        validatorTypes : {
            callback : {
                name : "callback",
                init : function(a, b) {
                    return {
                        validatorName : b,
                        callback : a.data("validation" + b + "Callback"),
                        lastValue : a.val(),
                        lastValid : !0,
                        lastFinished : !0
                    }
                },
                validate : function(a, b, d) {
                    if (d.lastValue === b && d.lastFinished)
                        return !d.lastValid;
                    if (d.lastFinished === !0) {
                        d.lastValue = b, d.lastValid = !0, d.lastFinished = !1;
                        var e = d,
                            f =
                            a;
                        c(d.callback, window, a, b, function(a) {
                            e.lastValue === a.value && (e.lastValid = a.valid, a.message && (e.message = a.message), e.lastFinished = !0, f.data("validation" + e.validatorName + "Message", e.message), setTimeout(function() {
                                f.trigger("change.validation")
                            }, 1))
                        })
                    }
                    return !1
                }
            },
            ajax : {
                name : "ajax",
                init : function(a, b) {
                    return {
                        validatorName : b,
                        url : a.data("validation" + b + "Ajax"),
                        lastValue : a.val(),
                        lastValid : !0,
                        lastFinished : !0
                    }
                },
                validate : function(b, c, d) {
                    return "" + d.lastValue == "" + c && d.lastFinished === !0 ? d.lastValid === !1 : (d.lastFinished === !0 && (d.lastValue = c, d.lastValid = !0, d.lastFinished = !1, a.ajax({
                        url : d.url,
                        data : "value=" + c + "&field=" + b.attr("name"),
                        dataType : "json",
                        success : function(a) {
                            "" + d.lastValue == "" + a.value && (d.lastValid = !!a.valid, a.message && (d.message = a.message), d.lastFinished = !0, b.data("validation" + d.validatorName + "Message", d.message), setTimeout(function() {
                                b.trigger("change.validation")
                            }, 1))
                        },
                        failure : function() {
                            d.lastValid = !0, d.message = "ajax call failed", d.lastFinished = !0, b.data("validation" + d.validatorName + "Message", d.message), setTimeout(function() {
                                b.trigger("change.validation")
                            }, 1)
                        }
                    })), !1)
                }
            },
            regex : {
                name : "regex",
                init : function(a, c) {
                    return {
                        regex : b(a.data("validation" + c + "Regex"))
                    }
                },
                validate : function(a, b, c) {
                    return !c.regex.test(b) && !c.negative || c.regex.test(b) && c.negative
                }
            },
            required : {
                name : "required",
                init : function() {
                    return {}
                },
                validate : function(a, b, c) {
                    return !(0 !== b.length || c.negative) || !!(b.length > 0 && c.negative)
                },
                blockSubmit : !0
            },
            match : {
                name : "match",
                init : function(a, b) {
                    var c = a.parents("form").first().find('[name="' + a.data("validation" + b + "Match") + '"]').first();
                    return c.bind("validation.validation", function() {
                        a.trigger("change.validation", {
                            submitting : !0
                        })
                    }), {
                        element : c
                    }
                },
                validate : function(a, b, c) {
                    return b !== c.element.val() && !c.negative || b === c.element.val() && c.negative
                },
                blockSubmit : !0
            },
            max : {
                name : "max",
                init : function(a, b) {
                    return {
                        max : a.data("validation" + b + "Max")
                    }
                },
                validate : function(a, b, c) {
                    return parseFloat(b, 10) > parseFloat(c.max, 10) && !c.negative || parseFloat(b, 10) <= parseFloat(c.max, 10) && c.negative
                }
            },
            min : {
                name : "min",
                init : function(a, b) {
                    return {
                        min : a.data("validation" + b + "Min")
                    }
                },
                validate : function(a, b, c) {
                    return parseFloat(b) < parseFloat(c.min) && !c.negative || parseFloat(b) >= parseFloat(c.min) && c.negative
                }
            },
            maxlength : {
                name : "maxlength",
                init : function(a, b) {
                    return {
                        maxlength : a.data("validation" + b + "Maxlength")
                    }
                },
                validate : function(a, b, c) {
                    return b.length > c.maxlength && !c.negative || b.length <= c.maxlength && c.negative
                }
            },
            minlength : {
                name : "minlength",
                init : function(a, b) {
                    return {
                        minlength : a.data("validation" + b + "Minlength")
                    }
                },
                validate : function(a, b, c) {
                    return b.length < c.minlength && !c.negative || b.length >= c.minlength && c.negative
                }
            },
            maxchecked : {
                name : "maxchecked",
                init : function(a, b) {
                    var c = a.parents("form").first().find('[name="' + a.attr("name") + '"]');
                    return c.bind("click.validation", function() {
                        a.trigger("change.validation", {
                            includeEmpty : !0
                        })
                    }), {
                        maxchecked : a.data("validation" + b + "Maxchecked"),
                        elements : c
                    }
                },
                validate : function(a, b, c) {
                    return c.elements.filter(":checked").length > c.maxchecked && !c.negative || c.elements.filter(":checked").length <= c.maxchecked && c.negative
                },
                blockSubmit : !0
            },
            minchecked : {
                name : "minchecked",
                init : function(a, b) {
                    var c = a.parents("form").first().find('[name="' + a.attr("name") + '"]');
                    return c.bind("click.validation", function() {
                        a.trigger("change.validation", {
                            includeEmpty : !0
                        })
                    }), {
                        minchecked : a.data("validation" + b + "Minchecked"),
                        elements : c
                    }
                },
                validate : function(a, b, c) {
                    return c.elements.filter(":checked").length < c.minchecked && !c.negative || c.elements.filter(":checked").length >= c.minchecked && c.negative
                },
                blockSubmit : !0
            }
        },
        builtInValidators : {
            email : {
                name : "Email",
                type : "shortcut",
                shortcut : "validemail"
            },
            validemail : {
                name : "Validemail",
                type : "regex",
                regex : "[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\\.[A-Za-z]{2,4}",
                message : "Not a valid email address<!-- data-validator-validemail-message to override -->"
            },
            passwordagain : {
                name : "Passwordagain",
                type : "match",
                match : "password",
                message : "Does not match the given password<!-- data-validator-paswordagain-message to override -->"
            },
            positive : {
                name : "Positive",
                type : "shortcut",
                shortcut : "number,positivenumber"
            },
            negative : {
                name : "Negative",
                type : "shortcut",
                shortcut : "number,negativenumber"
            },
            number : {
                name : "Number",
                type : "regex",
                regex : "([+-]?\\d+(\\.\\d*)?([eE][+-]?[0-9]+)?)?",
                message : "Must be a number<!-- data-validator-number-message to override -->"
            },
            integer : {
                name : "Integer",
                type : "regex",
                regex : "[+-]?\\d+",
                message : "No decimal places allowed<!-- data-validator-integer-message to override -->"
            },
            positivenumber : {
                name : "Positivenumber",
                type : "min",
                min : 0,
                message : "Must be a positive number<!-- data-validator-positivenumber-message to override -->"
            },
            negativenumber : {
                name : "Negativenumber",
                type : "max",
                max : 0,
                message : "Must be a negative number<!-- data-validator-negativenumber-message to override -->"
            },
            required : {
                name : "Required",
                type : "required",
                message : "This is required<!-- data-validator-required-message to override -->"
            },
            checkone : {
                name : "Checkone",
                type : "minchecked",
                minchecked : 1,
                message : "Check at least one option<!-- data-validation-checkone-message to override -->"
            }
        }
    },
        f = function(a) {
        return a.toLowerCase().replace(/(^|\s)([a-z])/g, function(a, b, c) {
            return b + c.toUpperCase()
        })
    },
        g = function(b) {
        var c = b.val(),
            d = b.attr("type");
        return "checkbox" === d && ( c = b.is(":checked") ? c : ""), "radio" === d && ( c = a('input[name="' + b.attr("name") + '"]:checked').length > 0 ? c : ""), c
    };
    a.fn.jqBootstrapValidation = function(b) {
        return e.methods[b] ? e.methods[b].apply(this, Array.prototype.slice.call(arguments, 1)) : "object" != typeof b && b ? (a.error("Method " + b + " does not exist on jQuery.jqBootstrapValidation"), null) : e.methods.init.apply(this, arguments)
    }, a.jqBootstrapValidation = function() {
        a(":input").not("[type=image],[type=submit]").jqBootstrapValidation.apply(this, arguments)
    }
}(jQuery), $(function() {
    $("body").on("input propertychange", ".floating-label-form-group", function(a) {
        $(this).toggleClass("floating-label-form-group-with-value", !!$(a.target).val())
    }).on("focus", ".floating-label-form-group", function() {
        $(this).addClass("floating-label-form-group-with-focus")
    }).on("blur", ".floating-label-form-group", function() {
        $(this).removeClass("floating-label-form-group-with-focus")
    })
}), jQuery(document).ready(function(a) {
    var b = 1170;
    if (a(window).width() > b) {
        var c = a(".navbar-custom").height();
        a(window).on("scroll", {
            previousTop : 0
        }, function() {
            var b = a(window).scrollTop();
            b < this.previousTop ? b > 0 && a(".navbar-custom").hasClass("is-fixed") ? a(".navbar-custom").addClass("is-visible") : a(".navbar-custom").removeClass("is-visible is-fixed") : (a(".navbar-custom").removeClass("is-visible"), b > c && !a(".navbar-custom").hasClass("is-fixed") && a(".navbar-custom").addClass("is-fixed")), this.previousTop =
            b
        })
    }
}); 