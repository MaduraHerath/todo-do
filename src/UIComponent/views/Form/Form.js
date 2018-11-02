import React from 'react';
import './Form.css';


function Form(props) {
    return (
        <div class="page-wrapper bg-gra-02 p-t-130 p-b-100 font-poppins">
            <div class="wrapper wrapper--w1024">
                <div class="card card-4">
                    <div class="card-body">
                        <h2 class="title">Ansible Configurations</h2>
                        <form method="POST">
                            <div class="row row-space">
                                <div class="col-6">
                                    <div class="input-group">
                                        <label class="label">Update Scripts </label>
                                        <input class="input--style-4" type="file" name="first_name"
                                               placeholder="/home/madura/Desktop/colorlib-regform-4/vendor"/>
                                    </div>
                                </div>
                            </div>
                            <label class="label">Restart services after run update scripts </label>
                            <div class="row row-space">
                                <div class="col-12">
                                    <div class="input-group">
                                        <div class="col text-center">
                                            <div class="chiller_cb">
                                                <input id="mysql" type="checkbox"/>
                                                <label for="mysql">MySQL</label>
                                                <span></span>
                                            </div>
                                        </div>
                                        <div class="col text-center">
                                            <div class="chiller_cb">
                                                <input id="mongo" type="checkbox"/>
                                                <label for="mongo">Mongo</label>
                                                <span></span>
                                            </div>
                                        </div>
                                        <div class="col text-center">
                                            <div class="chiller_cb">
                                                <input id="java" type="checkbox"/>
                                                <label for="java">Java</label>
                                                <span></span>
                                            </div>
                                        </div>
                                        <div class="col text-center">
                                            <div class="chiller_cb">
                                                <input id="tomcat" type="checkbox"/>
                                                <label for="tomcat">Apache Tomcat</label>
                                                <span></span>
                                            </div>
                                        </div>
                                        <div class="col text-center">
                                            <div class="chiller_cb">
                                                <input id="nginx" type="checkbox"/>
                                                <label for="nginx">Nginx</label>
                                                <span></span>
                                            </div>
                                        </div>
                                        <div class="col text-center">
                                            <div class="chiller_cb">
                                                <input id="all" type="checkbox"/>
                                                <label for="all">All</label>
                                                <span></span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <label class="label">API Server Changes </label>
                            <div class="row row-space">
                                <div class="col-12">
                                    <div class="input-group">
                                        <div class="col text-center">
                                            <div class="chiller_cb">
                                                <input id="i18nW" type="checkbox"/>
                                                <label for="i18nW">i18n Change Web</label>
                                                <span></span>
                                            </div>
                                        </div>
                                        <div class="col text-center">
                                            <div class="chiller_cb">
                                                <input id="i18nM" type="checkbox"/>
                                                <label for="i18nM">i18n Change Mobile</label>
                                                <span></span>
                                            </div>
                                        </div>
                                        <div class="col text-center">
                                            <div class="chiller_cb">
                                                <input id="i18nA" type="checkbox"/>
                                                <label for="i18nA">i18n Change Admin</label>
                                                <span></span>
                                            </div>
                                        </div>
                                        <div class="col text-center">
                                            <div class="chiller_cb">
                                                <input id="property" type="checkbox"/>
                                                <label for="property">Property File Change</label>
                                                <span></span>
                                            </div>
                                        </div>
                                        <div class="col text-center">
                                            <div class="chiller_cb">
                                                <input id="bean" type="checkbox"/>
                                                <label for="bean">Bean Configurations</label>
                                                <span></span>
                                            </div>
                                        </div>
                                        <div class="col text-center">
                                            <div class="chiller_cb">
                                                <input id="other" type="checkbox"/>
                                                <label for="other">Other</label>
                                                <span></span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="row row-space">
                                <div class="col-2">
                                    <div class="input-group">
                                        <label class="label">Schedule</label>
                                        <div class="input-group-icon">
                                            <input class="input--style-4 js-datepicker" type="text" name="birthday" />
                                                <i class="zmdi zmdi-calendar-note input-icon js-btn-calendar"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="row row-space align-items-center">
                                <div>
                                    <div class="p-t-15">
                                        <button class="btn btn--radius-2 btn--blue" type="submit">Run Playbooks Now
                                        </button>
                                    </div>
                                </div>
                                <div>
                                    <div class="p-t-15">
                                        <button class="btn btn--radius-2 btn--blue" type="submit">Save</button>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>

);
}


export default Form