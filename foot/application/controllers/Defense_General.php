<?php

require APPPATH.'libraries/REST_Controller.php';

class Defense_General extends REST_Controller{

    public function __construct(){
    parent::__construct();
    //load database
    $this->load->database();
    $this->load->model(array("api/Defense_General_model"));
    $this->load->library(array("form_validation"));
    $this->load->helper("security");
    }
    // GET: <project_url>/index.php/student
    public function index_get(){
        // list data method
        //echo "This is GET Method";
        // SELECT * from tbl_students;
        $dgeneral = $this->Defense_General_model->get_statsEquipeDefenseGeneral();
        // $students = $this->student_model->get_students();
        //print_r($query->result());

        if(count($dgeneral) > 0){

        $this->response(array(
            "status" => 1,
            "message" => "Defense General found",
            "data" => $dgeneral
        ), REST_Controller::HTTP_OK);
        }else{

        $this->response(array(
            "status" => 0,
            "message" => "No Defense General found",
            "data" => $dgeneral
        ), REST_Controller::HTTP_NOT_FOUND);
        }
    }
}
?>